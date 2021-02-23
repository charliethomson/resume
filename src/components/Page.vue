<template>
  <div class="pageContainer">
    <resume-header />
    <div class="separator" />
    <resume-body />
    <resume-footer />
  </div>
</template>

<style scoped>
.separator {
  height: 0.25in;
  background-image: linear-gradient(var(--header-bg) 0%, var(--body-bg) 100%);
}
.pageContainer {
  width: 8.5in;
  height: 11in;
  margin: auto;
  background-color: var(--body-bg);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ResumeHeader from "./ResumeHeader.vue";
import ResumeBody from "./ResumeBody.vue";
import ResumeFooter from "./ResumeFooter.vue";

export default defineComponent({
  name: "Page",
  components: {
    ResumeHeader,
    ResumeBody,
    ResumeFooter,
  },
});
</script>
