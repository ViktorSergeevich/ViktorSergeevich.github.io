import type { RouterMethod } from "h3";
import type { $Fetch } from "nitropack";

class HttpFactory {
  private readonly $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  call<T extends Record<string, unknown>, R>({
    method,
    url,
    data,
    extras
  }: {
    method: RouterMethod;
    url: string;
    data?: T;
    extras?: Record<string, unknown>;
  }): Promise<R> {
    return this.$fetch(url, { method, body: data, ...extras });
  }
}

export default HttpFactory;
