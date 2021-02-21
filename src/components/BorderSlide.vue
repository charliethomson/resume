<template>
  <div class="container" :class="maybeCenter" :style="cssVars">
    <slot>BorderSlide</slot>
  </div>
</template>

<style scoped>
.container {
  display: inline-block;
}

.container.center:after {
  margin: auto;
}

.container:after {
  content: "";
  display: block;
  width: var(--start-width);
  border-bottom: var(--border-height) solid var(--border-color);
  transition: all 1s ease;
}
.container:hover:after {
  width: var(--end-width);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BorderSlide",
  props: {
    color: { type: String, default: "var(--text)" },
    start_width: { type: String, default: "0%" },
    end_width: { type: String, default: "100%" },
    height: { type: String, default: "1px" },
    center: { type: Boolean, default: true },
  },
  computed: {
    cssVars(): {} {
      return {
        "--border-color": this.color,
        "--start-width": this.start_width,
        "--end-width": this.end_width,
        "--border-height": this.height,
      };
    },
    maybeCenter(): string {
      return this.center ? "center" : "";
    },
  },
});
</script>
