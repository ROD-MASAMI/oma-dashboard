import {InterceptStrategy} from './intercept.strategy'
import {AbstractInterceptor} from '../cor/abstract.interceptor'

import {GQLContext} from '../context'
import { AuthInterceptor } from '../cor/auth.interceptor'

export class RequestStrategy extends InterceptStrategy{

    async handle(ctx: GQLContext): Promise<GQLContext> {
        const handlersOrder: AbstractInterceptor[] = [
            new AuthInterceptor(),
        ]
        this.makeChain(handlersOrder)

        return await handlersOrder[0].intercept(ctx)
    }
}