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
.project {
  padding-bottom: 0.2in;
}
.projectHeader {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.1in;
}
.tools {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 50%;
  justify-self: end;
}

.description {
  text-indent: 10px;
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
