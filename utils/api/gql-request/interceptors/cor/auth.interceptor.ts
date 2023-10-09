import { AbstractInterceptor } from "./abstract.interceptor";
import { GQLContext } from "../context";

export class AuthInterceptor extends AbstractInterceptor {
  intercept(ctx: GQLContext): Promise<GQLContext> {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem("accessToken");
      if (!!token && token !== "undefined") {
        // @ts-ignore
        ctx.req.type.requestHeaders = {
          ...ctx.req.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    }
    return super.intercept(ctx);
  }
}
