<template>
  <Select v-model="year" size="small" :items="availableYears" trigger="icon" :label="$t('common.year')" />
</template>

<script setup lang="ts">
import { Select, type SelectItems } from "~/shared/ui/select";

const availableYears: SelectItems = [{ value: "2023" }, { value: "2022" }, { value: "2021" }];

const route = useRoute();

const router = useRouter();

const year = computed<string>({
  get() {
    return (route.query.year as string) ?? "";
  },
  set(value) {
    router.push({
      query: { ...route.query, year: value }
    });
  }
});
</script>
