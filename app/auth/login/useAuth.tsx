import {
  LoginMutation,
  LoginMutationVariables,
  useLoginMutation,
} from "@/graphql/generated/graphql";
import { graphqlRequestClient } from "@/utils/api/graphqlRequestClient";
import { saveLoginDetailsToLocalStorage } from "@/utils/helpers";
import { GraphQLError } from "graphql";
import { useRouter } from "next/navigation";
import React from "react";

const useAuth = () => {
  const router = useRouter();
  const {
    mutate,
    isLoading,
    error: errors,
    isError,
    data,
  } = useLoginMutation<GraphQLError[]>(graphqlRequestClient, {
    onSuccess: (
      data: LoginMutation,
      _variables: LoginMutationVariables,
      _context: unknown
    ) => {
      //saveLoginDetailsToLocalStorage
      saveLoginDetailsToLocalStorage(data);

      if (data) {
        router.push("/admin");
      }
    },
  });
  console.log("error", errors);
  return {
    mutate,
    isLoading,
    errors,
    isError,
  };
};

export default useAuth;
