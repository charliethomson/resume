<template>
  <div class="info">
    <slide-link
      class="link"
      v-bind="slideProps"
      v-for="link in links"
      :key="link.text"
      :href="link.href"
    >
      {{ link.text }}
    </slide-link>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align: left;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { resumeData } from "@/resume";
import SlideLink from "../components/SlideLink.vue";

export default defineComponent({
  name: "InfoLinks",
  components: { SlideLink },
  data(): {} {
    return {
      links: resumeData.header.basics.links,
      slideProps: {
        position: "left",
        start_width: "10px",
        color: "var(--link)",
        height: "1px",
      },
    };
  },
});
</script>
