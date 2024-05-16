<template>
  <StatusCard v-if="order" class="order" status="success">
    <div class="order-id">№{{ order.id }}</div>
  </StatusCard>
</template>

<script setup lang="ts">
import { StatusCard } from "~/shared/ui/status-card/index";

import type { Order } from "~/shared/repository/modules/type";

type Props = {
  order: Order;
};
defineProps<Props>();
</script>

<style scoped lang="scss">
.order {
  padding: 16px;
}
</style>
