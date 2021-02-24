<template>
  <div class="headerContainer">
    <div class="header">
      <div class="name">
        {{ basics.name }}
      </div>
      <div class="rest">
        <div class="contact">
          <a :href="`mailto:${basics.email}`">
            <border-slide
              color="var(--link-accent)"
              position="right"
              start_width="10px"
              class="link"
            >
              {{ basics.email }}
            </border-slide>
          </a>
          <a href="tel:(540) 229-2296">
            <border-slide
              color="var(--link-accent)"
              position="right"
              start_width="10px"
              class="link"
            >
              {{ basics.phone }}
            </border-slide>
          </a>
        </div>
        <div class="links">
          <div class="link" v-for="{ text, href } in basics.links" :key="text">
            <a :href="href">
              <border-slide
                color="var(--link-accent)"
                start_width="10px"
                class="link"
              >
                {{ text }}
              </border-slide>
            </a>
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
  box-shadow: 5px 5px 5px 0 black;
}
.header {
  border-bottom: 2px solid var(--text);
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
  font-family: "Potta One", sans-serif;
  position: absolute;
  left: 0.2in;
  top: 0.2in;
  padding: 0.1in;
  font-size: 20pt;
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
  padding: 0.1in;
}
.contact {
  text-align: right;
}
.links {
  text-align: left;
}

.contact {
  border-right: 2px solid var(--text);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { resumeData } from "../resume";
import Skill from "./Skill.vue";
import BorderSlide from "./BorderSlide.vue";

export default defineComponent({
  name: "ResumeHeader",
  components: { Skill, BorderSlide },
  data: () => ({
    ...resumeData.header,
  }),
});
</script>
