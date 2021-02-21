<template>
  <div class="expertise">
    <border-slide class="label">
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
}
.label {
  font-size: 14pt;
}
.item {
  font-size: 12pt;
  margin-left: 0.1in;
}
</style>

<script lang="ts">
import { Expertise } from "@/resume";
import { defineComponent } from "vue";
import BorderSlide from "./BorderSlide.vue";

export default defineComponent({
  name: "Expertise",
  components: { BorderSlide },
  props: {
    item: Object as () => Expertise,
  },
});
</script>
