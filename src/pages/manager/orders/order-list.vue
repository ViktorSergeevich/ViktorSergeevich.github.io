<template>
  <div class="order-list">
    <div v-if="orders?.response?.data?.orders?.length" class="order-list__items">
      <NuxtLink v-for="order in orders.response.data.orders" :key="order.id" :to="`/manager/orders/${order.id}`">
        <OrderItem :order="order" />
      </NuxtLink>
    </div>
    <Empty v-else class="order-list__stub"> {{ $t("orders.empty") }} </Empty>
  </div>
</template>

<script setup lang="ts">
import { Empty } from "~/shared/ui/empty";

import OrderItem from "~/pages/manager/orders/order/order-item.vue";

const route = useRoute();
const routeQuery = computed(() => route.query);

const { $api } = useNuxtApp();

const { data: orders } = await $api.order.getOrders(routeQuery.value);
</script>

<style scoped lang="scss">
.order-list {
  &__items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
