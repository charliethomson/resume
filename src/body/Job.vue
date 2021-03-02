<template>
  <div class="job">
    <div class="col" style="text-align:left">
      <slide-link
        :href="item.company.link"
        color="var(--link-accent)"
        position="left"
        start_width="10px"
        height="2px"
        class="company merriweather"
      >
        {{ item.company.name }}
      </slide-link>
      <div class="dates">{{ item.dates }}</div>
    </div>
    <div class="col col-right" style="text-align:right">
      <div class="locationContainer">
        <div class="location">
          {{ item.location }}
        </div>
      </div>
      <div class="position">{{ item.position }}</div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 10.5in) {
  .job {
    padding: 0.2in;
    max-width: 100%;
  }
}
.job {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
  width: 8in;
  margin: auto;
}
.col {
  display: flex;
  flex-direction: column;
}
.col-right {
  border-right: 2px solid var(--light-accent);
}
.col-right > * {
  padding-right: 10px;
}
.location {
  transition: 0.5s linear;
  display: inline-block;
  border-bottom: 2px dotted var(--light-accent);
}
.company {
  color: var(--link);
  font-weight: 600;
  font-size: 14;
}
.dates {
  padding-left: 10px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Job } from "../resume";
import SlideLink from "../components/SlideLink.vue";

export default defineComponent({
  name: "Job",
  components: { SlideLink },
  props: {
    item: Object as () => Job,
  },
});
</script>
