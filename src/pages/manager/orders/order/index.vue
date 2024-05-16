<template>
  <FixedLeftColumn class="order">
    <template #fixed>
      <Button width="full" class="order__back-btn" color="heart" @click="$router.back()">
        {{ $t("common.back") }}
      </Button>
    </template>
    <OrderView />
  </FixedLeftColumn>
</template>

<script setup lang="ts">
import { Button } from "~/shared/ui/button/index";
import { FixedLeftColumn } from "~/shared/ui/templates";

import OrderView from "~/pages/manager/orders/order/order-view.vue";
</script>

<style lang="scss" scoped>
.order {
  &__back-btn {
    @include start-at("lg") {
      display: none;
    }
  }
}
</style>
