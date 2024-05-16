import type { AsyncData } from "#app";

export type Order = {
  manager_notice: number;
  fi_child: string;
  address: string;
  phone: string;
  fio_payer: string;
  photo_size: string;
  low_fi_child: string;
  low_fio_payer: string;
  email_payer: string;
  id: string;
  psid: string;
  full_id: string;
  uid: string;
  status: string;
  type: string;
  type_data: string;
  sum: string;
  unload: string;
  closed: string;
  type_pay: string;
  closed_date: number;
  unload_date: string;
  date_receiving: number;
  disbursement_date: number;
  client: string;
  discount: string;
  change_sum: string;
  change_status: string;
  in_work: string;
  in_work_date: string;
  receiving: string;
  receiving_email: string;
  value: string;
  s_group: string;
  ps_type: string;
  ps_status: string;
  c_date: string;
  date: string;
  c_date_pay: string;
  date_pay: string;
};

type OrdersResponseData = {
  message: string;
  is_s_k_alb: number;
  orders: Order[];
  ps_type: string | null;
  ps_title: string | null;
};

type ApiResponse<T> = {
  response: {
    status: number;
    data: T;
  };
};

export type OrdersResponse = ApiResponse<OrdersResponseData>;

export interface IOrderModule {
  getOrders: (params: Record<string, unknown>) => AsyncData<ApiResponse<OrdersResponseData> | null, Error | null>;
}
