<template>
  <div class="sort-filter">
    <Toggle :pressed="toggleAllPressed" color="gray" @click="selectAll"> {{ $t("common.all") }} </Toggle>
    <Toggle v-for="icon in icons" :key="icon.id" v-model:pressed="icon.selected" color="gray">
      <img class="sort-filter__toggle-icon" :src="icon.icon" :alt="icon.alt" width="100%" height="100%" />
    </Toggle>
  </div>
</template>

<script setup lang="ts">
import { Toggle } from "~/shared/ui/toggle/index";

import type { FilterSortIcons } from "~/pages/manager/orders/filters/types";

import Icon from "~/shared/assets/images/no-photo-main.png";

const icons: FilterSortIcons = reactive([
  { id: "1IconLike", selected: false, icon: Icon, alt: "" },
  { id: "2IconLike", selected: false, icon: Icon, alt: "" },
  { id: "3IconLike", selected: false, icon: Icon, alt: "" },
  { id: "4IconLike", selected: false, icon: Icon, alt: "" },
  { id: "5IconLike", selected: false, icon: Icon, alt: "" },
  { id: "6IconLike", selected: false, icon: Icon, alt: "" },
  { id: "7IconLike", selected: false, icon: Icon, alt: "" }
]);

const toggleAllPressed = ref(false);

const selectAll = () => {
  toggleAllPressed.value = !toggleAllPressed.value;

  icons.forEach(el => {
    el.selected = toggleAllPressed.value;
  });
};

watch(icons, value => {
  toggleAllPressed.value = value.every(el => el.selected);
});
</script>

<style scoped lang="scss">
.sort-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  &__toggle-icon {
    width: auto;
    height: 100%;
  }
}
</style>
