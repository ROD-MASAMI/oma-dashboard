import { AbstractInterceptor, GQLResponse } from "./abstract.interceptor";
import { GQLContext } from "../context";

export class AuthorizationInterceptor extends AbstractInterceptor {
  intercept(ctx: GQLContext): GQLResponse["data"] {
    //check if the ctx.res.errors includes message: 'Session expired! Please login'
    //if yes, then redirect to login page
    //if no, then return ctx.res.data
    if (
      ctx.res.errors &&
      ctx.res.errors.length > 0 &&
      ctx.res.errors.some((e) => e.message === "Session expired! Please login.")
    ) {
      window.location.href = "/auth/login";
    } else {
      console.log("auth");
      return ctx;
    }
  }
}
