<template>
  <div class="project">
    <div class="projectHeader">
      <slide-link
        class="title"
        :href="item.url"
        color="var(--link-accent)"
        position="left"
        height="2px"
        start_width="10px"
      >
        {{ item.name }}
      </slide-link>
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
.title {
  font-weight: 600;
  font-size: 14pt;
}
.tools {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  max-width: 50%;
  justify-self: end;
}
.tool {
  padding-left: 1ch;
}

.description {
  text-indent: 10px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Project } from "../resume";
import SlideLink from "../components/SlideLink.vue";

export default defineComponent({
  name: "Project",
  components: { SlideLink },
  props: {
    item: Object as () => Project,
  },
});
</script>
