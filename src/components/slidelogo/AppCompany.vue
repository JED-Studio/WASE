<script>
import { defineComponent } from 'vue'
import AppLogo from './AppLogo.vue'

export default defineComponent({
  components: {
    AppLogo,
  },
})
</script>
<template>
  <div class="app-company__section">
    <div class="app-wace__container">
      <div class="app-company">
        <div class="app-company__header">Нам доверяют</div>
        <AppLogo />
      </div>
    </div>
  </div>
</template>

<style>
.app-company {
  display: flex;
  align-items: center;
}

.app-company__header {
  border-right: 3px solid #000000;
  font-size: 2.5rem;
  font-weight: 500;
  padding: 10px 5px 10px 0;
  white-space: nowrap;
  color: var(--text-color);
}

.app-company__section {
  margin-bottom: 100px;
}
</style>
