<template>
  <div v-for="listing in listings" :key="listing.id">
    <listing @eventListing="OnFilter" :listing="listing" />
  </div>
</template>

<script lang="ts" setup>
import Listing from "./Listing/Listing.vue";

import { defineComponent } from "vue";

defineProps({
  listings: {
    required: true,
    type: Object,
  },
});

const newEmit = defineEmits(["filter-listing"]);
const OnFilter = (e: any) => {
  newEmit("filter-listing", e);
};
</script>

<style scoped></style>
