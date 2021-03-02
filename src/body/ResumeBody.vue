<template>
  <div class="bodyContainer">
    <div class="topSection">
      <body-section :heading="expertise.heading">
        <expertise
          v-for="item in expertise.data"
          :key="item.name"
          :item="item"
        />
      </body-section>

      <body-section :heading="projects.heading">
        <project v-for="item in projects.data" :key="item.name" :item="item" />
      </body-section>
    </div>

    <body-section :heading="work.heading">
      <job v-for="item in work.data" :key="item.name" :item="item" />
    </body-section>
  </div>
</template>

<style scoped>
.topSection {
  max-width: 8.5in;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.topSection > * {
  max-width: 4in;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { resumeData } from "../resume";
import Expertise from "./Expertise.vue";
import BodySection from "./BodySection.vue";
import Project from "./Project.vue";
import Job from "./Job.vue";

export default defineComponent({
  name: "ResumeBody",
  components: { Expertise, BodySection, Project, Job },
  data: () => ({
    ...resumeData.body,
  }),
});
</script>
