<template>
  <div class="contact">
    <slide-link v-bind="slideProps" :href="`mailto:${email}`">{{
      email
    }}</slide-link>
    <slide-link v-bind="slideProps" :href="`tel:${phone}`">{{
      phone
    }}</slide-link>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align: right;
}
.email {
}
.phone {
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
