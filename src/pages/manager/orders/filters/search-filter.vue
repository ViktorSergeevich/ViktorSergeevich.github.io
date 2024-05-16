<template>
  <Search
    v-model:search-type="searchType"
    v-model:search-query="searchQuery"
    :search-types="searchTypes"
    select-display-value="icon"
  />
</template>

<script setup lang="ts">
import { Search, type SearchTypes } from "~/shared/ui/search/index";

const route = useRoute();
const router = useRouter();

const { t } = useI18n();

const searchTypes: SearchTypes = {
  order_number: {
    placeholder: t("orders.filters.searchTypes.order_number.placeholder"),
    title: t("orders.filters.searchTypes.order_number.title")
  },
  psid: {
    placeholder: t("orders.filters.searchTypes.psid.placeholder"),
    title: t("orders.filters.searchTypes.psid.title")
  },
  client_id: {
    placeholder: t("orders.filters.searchTypes.client_id.placeholder"),
    title: t("orders.filters.searchTypes.client_id.title")
  },
  phone: {
    placeholder: t("orders.filters.searchTypes.phone.placeholder"),
    title: t("orders.filters.searchTypes.phone.title")
  },
  email: {
    placeholder: t("orders.filters.searchTypes.email.placeholder"),
    title: t("orders.filters.searchTypes.email.title")
  },
  payer: {
    placeholder: t("orders.filters.searchTypes.payer.placeholder"),
    title: t("orders.filters.searchTypes.payer.title")
  }
};

const searchType = computed<keyof typeof searchTypes>({
  get() {
    return (
      Object.keys(searchTypes).find(el => el === (route.query.search_type as string)) ?? Object.keys(searchTypes)[0]
    );
  },
  set(value) {
    router.push({
      query: { ...route.query, search_type: value }
    });
  }
});

const searchQuery = computed<string>({
  get() {
    return (route.query.search_value as string) ?? "";
  },
  set(value) {
    router.push({
      query: { ...route.query, search_value: value, search_type: searchType.value }
    });
  }
});
</script>
