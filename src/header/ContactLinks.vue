<template>
  <div class="contact">
    <slide-link class="email" v-bind="slideProps" :href="`mailto:${email}`">
      {{ email }}
    </slide-link>
    <slide-link v-bind="slideProps" :href="`tel:${phone}`">
      {{ phone }}
    </slide-link>
  </div>
</template>

<style scoped>
.contact {
  border-right: 2px solid var(--text);
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align: right;
}
@media screen and (max-width: 10.5in) {
  .contact {
    border-right: none;
    border-bottom: 2px solid var(--text);
    width: 100%;
    text-align: center;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { resumeData } from "@/resume";
import SlideLink from "../components/SlideLink.vue";

export default defineComponent({
  name: "ContactLinks",
  components: { SlideLink },
  data(): {} {
    return {
      email: resumeData.header.basics.email,
      phone: resumeData.header.basics.phone,
      slideProps: {
        position: "right",
        start_width: "10px",
        color: "var(--link)",
        height: "1px",
      },
    };
  },
});
</script>
