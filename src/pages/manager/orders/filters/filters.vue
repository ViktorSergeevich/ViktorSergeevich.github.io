<template>
  <aside class="orders-aside">
    <Button class="orders-aside__back-btn" color="heart" @click="$router.back()"> {{ $t("common.back") }} </Button>
    <div class="block orders-aside__block">
      <DateRangeFilter />
      <SearchFilter />
      <SortFilter />
    </div>
    <div class="block orders-aside__block">
      <YearFilter />
      <div class="orders-aside__actions">
        <Button width="full" @click="updateList"> {{ $t("common.apply") }} </Button>
        <Button width="full" color="gray-outline" @click="clearFilters"> {{ $t("common.reset") }} </Button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Button } from "~/shared/ui/button/index";

import DateRangeFilter from "~/pages/manager/orders/filters/date-range-filter.vue";
import SearchFilter from "~/pages/manager/orders/filters/search-filter.vue";
import SortFilter from "~/pages/manager/orders/filters/sort-filter.vue";
import YearFilter from "~/pages/manager/orders/filters/year-filter.vue";

const route = useRoute();
const router = useRouter();

const routeQuery = computed(() => route.query);

const { $api } = useNuxtApp();
const updateList = async () => {
  await $api.order.getOrders(routeQuery.value);
};
const clearFilters = async () => {
  await router.push({
    query: {}
  });
  await $api.order.getOrders(routeQuery.value);
};
</script>

<style scoped lang="scss">
.orders-aside {
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__block {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 16px;
  }

  &__actions {
    display: flex;
    gap: 15px;
  }

  &__back-btn {
    @include start-at("lg") {
      display: none;
    }
  }
}
</style>
