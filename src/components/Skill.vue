<template>
  <border-slide
    start_width="20px"
    color="var(--light-accent)"
    height="2px"
    class="skillHeader"
  >
    {{ name }}
  </border-slide>
  <div class="skillBody">
    <div class="skill" v-for="item in items" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>
.skillHeader {
  color: var(--light-accent);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import BorderSlide from "./BorderSlide.vue";

export default defineComponent({
  name: "ResumeHeader",
  components: { BorderSlide },
  props: ["name", "items"],
});
</script>
