import { GraphQLError } from "graphql";

export interface GQLErrors extends Error {
  response?: {
    errors?: GraphQLError[];
  };
}
