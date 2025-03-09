<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
})
</script>

<template>
  <div class="app-chapter__section">
    <div class="app-wace__container">
      <div class="app-chapter">
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<style>
.app-chapter__section {
  margin-bottom: 40px;
}
.app-chapter > h2 {
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: -0.04em;
  line-height: 0.9;
  color: black;
}
</style>
