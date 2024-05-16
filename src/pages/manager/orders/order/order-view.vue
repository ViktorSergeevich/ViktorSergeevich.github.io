<template>
  <OrderItem v-if="order" :order="order" />
</template>

<script setup lang="ts">
import OrderItem from "~/pages/manager/orders/order/order-item.vue";

const route = useRoute("manager-orders-id");
const { id } = route.params;

const { $api } = useNuxtApp();

const { data } = await $api.order.getOrders({ search_type: "order_number", search_value: id });

const order = computed(() => {
  if (!data.value?.response.data.orders || data.value.response.data.orders.length !== 1) return null;

  return data.value.response.data.orders[0];
});
</script>

<style scoped lang="scss"></style>
