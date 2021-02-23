<template>
  <page />
  <controls />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "./components/Page.vue";
import Controls from "./components/Controls.vue";

export default defineComponent({
  name: "App",
  components: {
    Page,
    Controls,
  },
});
</script>

<style>
#app,
body {
  background-color: var(--app-bg);
  height: 11in;
}
</style>
