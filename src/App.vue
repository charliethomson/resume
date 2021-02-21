<template>
  <Page />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "./components/Page.vue";

export default defineComponent({
  name: "App",
  components: {
    Page,
  },
});
</script>

<style>
#app,
body {
  background-color: var(--app-bg);
}
</style>
