<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    header: String,
  },
})
</script>

<template>
  <div class="app-headlines__section">
    <div class="app-wace__container">
      <div class="app-headlines__header">{{ header }}</div>
    </div>
  </div>
</template>

<style scoped>
.app-headlines__header {
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 2.3rem;
  line-height: 28px;
  color: black;
}
</style>
