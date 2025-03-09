<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    const openModal = inject('openModal')

    return {
      openModal,
    }
  },
})
</script>

<template>
  <div class="app-button__write" @click="openModal">Обсудить проект</div>
</template>

<style>
.app-button__write {
  padding: 11px 22px;
  background-color: black;
  color: white;
  max-width: 200px;
  width: 100%;
  border-radius: 5px;
  text-align: center;
}
</style>
