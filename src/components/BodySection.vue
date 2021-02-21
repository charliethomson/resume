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
  font-size: 20px;
  height: 25px;
  width: 3in;
  margin: auto;
  text-align: center;
}

.body {
  width: 6in;
  margin: auto;
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
