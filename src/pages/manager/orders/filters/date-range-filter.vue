<template>
  <InputDate v-model="dateRange" size="small" :range="true" :label="$t('common.dateRange')" :required="false" />
</template>

<script setup lang="ts">
import { format, parseISO } from "date-fns";
import type { LocationQueryValue } from "vue-router";

import { InputDate } from "~/shared/ui/inputs/input-date/index";

const route = useRoute();
const router = useRouter();

const dateRange = computed<string[]>({
  get() {
    return [route.query.date_start, route.query.date_finish].map(el => convertQueryToDate(el) || "");
  },
  set(value) {
    const [date_start, date_finish] = value.map(convertDateToQuery);
    router.push({
      query: { ...route.query, date_start, date_finish }
    });
  }
});

function convertDateToQuery(dateStr: string) {
  if (!dateStr || Array.isArray(dateStr)) return null;

  const dateObj = new Date(dateStr);
  return format(dateObj, "yyyyMMdd");
}

function convertQueryToDate(dateStr: LocationQueryValue | LocationQueryValue[]) {
  if (!dateStr || Array.isArray(dateStr)) return null;

  const dateObj = parseISO(dateStr);
  return format(dateObj, "yyyy.MM.dd");
}
</script>
