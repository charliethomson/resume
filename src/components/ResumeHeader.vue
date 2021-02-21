<template>
  <div class="headerContainer">
    <div class="header">
      <div class="name">
        {{ basics.name }}
      </div>
      <div class="rest">
        <div class="contact">
          <a :href="`mailto:${basics.email}`">{{ basics.email }}</a>
          <a href="tel:(540) 229-2296">{{ basics.phone }}</a>
        </div>
        <div class="links">
          <div class="link" v-for="{ text, href } in basics.links" :key="text">
            <a :href="href">{{ text }}</a>
          </div>
        </div>
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
  border-bottom: 2px solid var(--dark-accent);
  padding: 0.25in;
  height: 1in;
}
.skills {
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.25in;
}
.skillContainer {
  width: 1.4in;
}

.name {
  position: absolute;
  left: 0.2in;
  top: 0.2in;
  padding: 0.1in;
  font-size: 24pt;
}
.rest {
  position: absolute;
  right: 0.2in;
  top: 0.2in;
  display: flex;
  flex-direction: row;
}
.rest > * {
  display: flex;
  flex-direction: column;
  text-align: right;
  padding: 0.1in;
}

.contact {
  border-right: 2px solid var(--dark-accent);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { resumeData } from "../resume";
import Skill from "./Skill.vue";

export default defineComponent({
  name: "ResumeHeader",
  components: { Skill },
  data: () => ({
    ...resumeData.header,
  }),
});
</script>
