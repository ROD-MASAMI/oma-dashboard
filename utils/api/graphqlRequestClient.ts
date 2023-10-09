import { GraphQLClient } from "graphql-request";
import { serverUrl } from "../../env";

import { GQLContext } from "./gql-request/interceptors/context";

const request = async function (
  this: GraphQLClient,
  type: string,
  variables: any,
  headers = {}
): Promise<any> {
  const ctx = new GQLContext(this);
  await ctx.setRequest({ type, variables, headers });
  try {
    await ctx.sendRequest();
  } catch (e: any) {
    const _errors = sanitizeErrors(e.response);
    throw _errors;
  }

  return ctx.res?.data;
};

// GraphQLClient.prototype.request = request
GraphQLClient.prototype.request = request as any;

export const graphqlRequestClient = new GraphQLClient(
  `${serverUrl}graphql`,
  {}
);

// const token = localStorage.getItem("accessToken")
// export const graphqlRequestClient = new GraphQLClient(
//   serverUrl,
//   {
//       headers: {
//           "Authorization": `Bearer ${token}`
//       }
//   }
// );

const sanitizeErrors = (response: any) => {
  if (response && response.errors) {
    // if(response.errors.some((e:any) => e.message === "Session expired! Please login.")){
    //     window.location.href = '/login'
    //     return;
    // }

    //sanitise Errors from response
    return response.errors.map((error: any) => {
      return {
        message: error.message,
        payload: response,
      };
    });
  } else {
    return [
      {
        message: "unknown Error Error",
        payload: response,
      },
    ];
  }
};
