<template>
  <div class="pageContainer">
    <resume-header />
    <resume-body />
  </div>
</template>

<style scoped>
.pageContainer {
  width: 8.5in;
  height: 11in;
  margin: auto;
  background-color: var(--body-bg);
  box-shadow: 5px 5px 5px 0 black;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import ResumeHeader from "./ResumeHeader.vue";
import ResumeBody from "./ResumeBody.vue";

export default defineComponent({
  name: "Page",
  components: {
    ResumeHeader,
    ResumeBody,
  },
});
</script>
