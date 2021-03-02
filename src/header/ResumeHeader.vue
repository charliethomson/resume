<template>
  <div class="headerContainer">
    <div class="header">
      <div class="name">{{ basics.name }}</div>
      <div class="links">
        <contact-links />
        <info-links />
      </div>
    </div>
    <div class="skills">
      <div class="skillContainer" v-for="skill in skills" :key="skill.name">
        <skill v-bind="skill" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.headerContainer {
  position: relative;
  text-align: center;
  background-color: var(--header-bg);
}
.header {
  background-color: var(--body-bg);
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.skills {
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.25in;

  box-shadow: inset 0px 22px 15px -20px rgba(0, 0, 0, 0.43),
    inset 0px -22px 15px -20px rgba(0, 0, 0, 0.43);
}
.skillContainer {
  width: 1.4in;
}

.name {
  padding: 10px;
  font-weight: 600;
  font-size: 20pt;
}
.links {
  display: flex;
  flex-direction: row;
}
@media screen and (max-width: 10.5in) {
  .skills {
    flex-wrap: wrap;
  }

  .skillContainer {
    padding-bottom: 10px;
    max-width: 1in;
  }
  .header {
    flex-wrap: wrap;
  }
  .links {
    flex-direction: column;
    width: 100%;
  }
  .name {
    font-size: 24pt;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { resumeData } from "../resume";
import Skill from "./Skill.vue";
import ContactLinks from "./ContactLinks.vue";
import InfoLinks from "./InfoLinks.vue";

export default defineComponent({
  name: "ResumeHeader",
  components: { Skill, ContactLinks, InfoLinks },
  data: () => ({
    ...resumeData.header,
  }),
});
</script>
