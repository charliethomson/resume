<template>
  <div class="container" :class="cssClass" :style="cssVars">
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: inline-block;
  color: inherit;
}

.container.left:after {
  margin-right: auto;
}
.container.center:after {
  margin: auto;
}
.container.right:after {
  margin-left: auto;
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

@media print {
  .container.hide:after {
    display: none;
  }
}
@media screen and (max-width: 10.5in) {
  .container.hide:after {
    display: none;
  }
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
    position: { type: String, default: "left" },
    hide: { type: Boolean, default: true },
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
    cssClass(): string {
      return this.position + (this.hide ? " hide" : "");
    },
  },
});
</script>
