<template>
  <div class="header">
    <BackgroundHeaderDesktop />
  </div>
</template>
<script lang="ts">
import BackgroundHeaderDesktop from "./icons/Background-Header-Desktop.vue";
export default {
  name: "Header",
  components: {
    BackgroundHeaderDesktop,
  },
};
</script>

<style scoped>
.header {
  overflow-x: hidden;
}
</style>
