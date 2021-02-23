<template>
  <div class="section">
    <div class="heading">
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
  margin: auto;
  align-items: center;
  text-align: center;
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
