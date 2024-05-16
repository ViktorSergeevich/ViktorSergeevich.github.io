<template>
  <FixedLeftColumn>
    <template #fixed>
      <Filters />
    </template>
    <OrderList />
  </FixedLeftColumn>
</template>

<script setup lang="ts">
import { FixedLeftColumn } from "~/shared/ui/templates";

import OrderList from "~/pages/manager/orders/order-list.vue";
import Filters from "~/pages/manager/orders/filters/filters.vue";
</script>
