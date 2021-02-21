<template>
  <div class="project">
    <div class="projectHeader">
      <border-slide color="var(--link)" :center="false" start_width="10px">
        <a :href="item.url" class="title">{{ item.name }}</a>
      </border-slide>
      <div class="tools">
        <div class="tool" v-for="tool in item.tools" :key="tool">
          {{ tool }}
        </div>
      </div>
    </div>
    <div class="description">{{ item.description }}</div>
  </div>
</template>

<style scoped>
.tools {
  display: flex;
  flex-wrap: 1;
  flex-direction: column;
  width: 200px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Project } from "../resume";
import BorderSlide from "./BorderSlide.vue";

export default defineComponent({
  name: "Project",
  components: { BorderSlide },
  props: {
    item: Object as () => Project,
  },
});
</script>
