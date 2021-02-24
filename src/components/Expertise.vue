<template>
  <div class="expertise">
    <border-slide class="label" height="2px">
      {{ item.name }}
    </border-slide>
    <div class="items">
      <div class="item" v-for="bullet in item.items" :key="bullet">
        {{ bullet }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.expertise {
  margin: 0.05in;
  margin-top: 0;
}
.label {
  font-size: 14pt;
  font-weight: 600;
}
.item {
  margin-bottom: 0.05in;
  font-size: 12pt;
  margin-left: 0.1in;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Expertise } from "@/resume";
import BorderSlide from "./BorderSlide.vue";

export default defineComponent({
  name: "Expertise",
  components: { BorderSlide },
  props: {
    item: Object as () => Expertise,
  },
});
</script>
