<template>
  <div class="job">
    <div class="company">{{ item.company }}</div>
    <div class="location">{{ item.location }}</div>
    <div class="dates">{{ item.dates }}</div>
    <div class="position">{{ item.position }}</div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from "vue";
import { Job } from "../resume";

export default defineComponent({
  name: "Job",
  props: {
    item: Object as () => Job,
  },
});
</script>
