<template>
  <div class="footer">
    <div class="copywrite">
      © Copywrite Charles Thomson, 2021, all rights reserved
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 0.375in;
  background-image: linear-gradient(var(--body-bg), var(--header-bg) 50%);
}
.copywrite {
  display: inline-block;
  align-self: flex-end;
  font-size: 8pt;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ResumeFooter",
  props: {},
});
</script>
