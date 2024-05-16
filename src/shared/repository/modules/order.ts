import HttpFactory from "~/shared/repository/factory";
import type { OrdersResponse, IOrderModule } from "~/shared/repository/modules/type";

class OrderModule extends HttpFactory implements IOrderModule {
  private RESOURCE = "/method";

  getOrders(params?: Record<string, unknown>) {
    return useAsyncData<OrdersResponse>(() =>
      this.call({
        method: "get",
        url: `${this.RESOURCE}/orders.getTest`,
        extras: { params }
      })
    );
  }
}

export default OrderModule;
