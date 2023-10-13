import { GQLRequest, GQLResponse } from "../cor/abstract.interceptor";
import { GraphQLClient, RawRequestOptions, Variables } from "graphql-request";
import { RequestSnapshot } from "./snapshot";
import { RequestStrategy } from "../strategies/request.strategy";
import { ResponseStrategy } from "../strategies/response.strategy";
import { NativeRequestAdapter } from "../adapters/native-request.adapter";

export class GQLContext {
  private client: GraphQLClient;
  private snapshot!: RequestSnapshot;
  private readonly requestInterceptor = new RequestStrategy();
  private readonly responseInterceptor = new ResponseStrategy();

  public req!: GQLRequest;
  public res!: GQLResponse;
  public isRepeated = false;

  constructor(client: GraphQLClient) {
    this.client = client;
  }

  async setRequest(req: GQLRequest) {
    this.req = req;
    await this.requestInterceptor.handle(this);
  }

  async setResponse(res: GQLResponse) {
    this.res = res;
    await this.responseInterceptor.handle(this);
  }

  async sendRequest(): Promise<GQLResponse> {
    if (!this.snapshot) {
      this.createSnapshot();
    }

    const val = NativeRequestAdapter(this) as [
      query: string,
      variables?: unknown,
      requestHeaders?: HeadersInit | undefined
    ];

    try {
      const res = (await this.client.rawRequest.apply(
        this.client,
        // @ts-ignore
        val
      )) as GQLResponse;

      await this.setResponse(res);

      return this.res;
    } catch (error: any) {
      // throw error;
      await this.setResponse(error.response as GQLResponse);
      return this.res;
    }
  }

  async redo(): Promise<GQLResponse> {
    await this.snapshot.restore();
    this.isRepeated = true;
    return await this.sendRequest();
  }

  createSnapshot() {
    this.snapshot = new RequestSnapshot(this);
  }
}
