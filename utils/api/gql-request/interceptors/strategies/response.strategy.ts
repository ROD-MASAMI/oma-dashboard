import { InterceptStrategy } from "./intercept.strategy";
import { AbstractInterceptor, GQLResponse } from "../cor/abstract.interceptor";

import { GQLContext } from "../context";
import { RetrieveDataInterceptor } from "../cor/retrieve-data.interceptor";
import { AuthorizationInterceptor } from "../cor/authorization.interceptor";
// import {HandleRefreshToken} from '../cor/handle-refresh-token'

export class ResponseStrategy extends InterceptStrategy {
  async handle(ctx: GQLContext): Promise<GQLResponse["data"]> {
    const handlersOrder: AbstractInterceptor[] = [
      // new HandleRefreshToken(),

      new AuthorizationInterceptor(),
      new RetrieveDataInterceptor(),
    ];
    this.makeChain(handlersOrder);

    return await handlersOrder[0].intercept(ctx);
  }
}
