<template>
  <div class="pageContainer">
    <resume-header />
    <resume-body />
  </div>
  <controls />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ResumeHeader from "./header/ResumeHeader.vue";
import ResumeBody from "./body/ResumeBody.vue";
import Controls from "./components/Controls.vue";

export default defineComponent({
  name: "App",
  components: {
    ResumeHeader,
    ResumeBody,
    Controls,
  },
});
</script>

<style>
#app,
body {
  background-color: var(--app-bg);
  max-height: 11in;
}
.pageContainer {
  max-width: 8.5in;
  max-height: 11in;
  margin: auto;
  background-color: var(--body-bg);
}
@media screen and (max-width: 10.5in) {
  #app,
  body {
    background-color: var(--app-bg);
    max-height: unset;
  }
  .pageContainer {
    max-width: unset;
    max-height: unset;
    margin: auto;
    background-color: var(--body-bg);
  }
}
</style>
