<template>
  <div>
    <a :href="href">
      <link-icon>
        <border-slide v-bind="borderSlideVars">
          <slot />
        </border-slide>
      </link-icon>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BorderSlide from "./BorderSlide.vue";
import LinkIcon from "./LinkIcon.vue";

export default defineComponent({
  name: "SlideLink",
  components: {
    BorderSlide,
    LinkIcon,
  },
  props: {
    color: { type: String, default: "var(--text)" },
    start_width: { type: String, default: "0%" },
    end_width: { type: String, default: "100%" },
    height: { type: String, default: "1px" },
    position: { type: String, default: "left" },
    href: { type: String, required: true },
  },
  computed: {
    borderSlideVars(): {} {
      return {
        color: this.color,
        start_width: this.start_width,
        end_width: this.end_width,
        height: this.height,
        position: this.position,
      };
    },
  },
});
</script>
