import { defineNuxtPlugin } from "#app";
import type { FetchOptions } from "ofetch";

import OrderModule from "~/shared/repository/modules/order";

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  order: OrderModule;
}

export default defineNuxtPlugin(() => {
  const fetchOptions: FetchOptions = {};

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    order: new OrderModule(apiFetcher)
  };

  return {
    provide: {
      api: modules
    }
  };
});
