<template>
  <div class="bodyContainer">
    <div class="horizontal">
      <body-section :heading="expertise.heading">
        <div class="expertiseContainer">
          <expertise
            v-for="item in expertise.data"
            :key="item.name"
            :item="item"
          />
        </div>
      </body-section>

      <body-section :heading="projects.heading">
        <div class="projectsContainer">
          <project
            v-for="item in projects.data"
            :key="item.name"
            :item="item"
          />
        </div>
      </body-section>
    </div>

    <body-section :heading="work.heading">
      <div class="jobsContainer">
        <job v-for="item in work.data" :key="item.name" :item="item" />
      </div>
    </body-section>
  </div>
</template>

<style scoped>
.horizontal {
  width: 8.5in;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.horizontal > * {
  width: 4in;
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
