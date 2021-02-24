<template>
  <div class="section">
    <div class="heading merriweather">
      {{ heading }}
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.heading {
  font-size: 18pt;
  font-weight: 600;
  margin: auto;
  align-items: center;
  text-align: center;
}
.section {
  margin-top: 0.25in;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BodySection",
  props: {
    heading: String,
  },
});
</script>
