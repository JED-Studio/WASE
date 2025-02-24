<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    open: Boolean,
  },

  setup(__, { emit }) {
    const option = () => {
      emit('option')
    }

    return { option }
  },
})
</script>

<template>
  <div class="app-header__sidebar" :class="{ 'app-header__sidebar--active': open }">
    <img width="30" height="30" src="/public/svg/close.svg" alt="" @click="option" />
    <nav>
      <ul>
        <li><RouterLink to="/about">О нас</RouterLink></li>
        <li><RouterLink to="/services">Услуги</RouterLink></li>
        <li><RouterLink to="/projects">Проекты</RouterLink></li>
      </ul>
    </nav>
    <div class="app-header__social-sidebar">
      <a href=""><img width="30" src="/public/svg/instagram.svg" alt="" /></a>
      <a href=""><img width="30" src="/public/svg/telegram.svg" alt="" /></a>
      <a href=""><img width="30" src="/public/svg/whatsapp.svg" alt="" /></a>
    </div>
  </div>
</template>

<style scoped>
.app-header__sidebar {
  position: fixed;
  top: 0;
  padding: 20px;
  right: -300px;
  width: 300px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 9999;
  transition: right 0.2s;
}
.app-header__sidebar--active {
  right: 0;
}

.app-header__menu > img {
  display: block;
}

.app-header__sidebar nav {
  margin: 30px 0;
}

.app-header__sidebar nav ul li {
  border-radius: 5px;
  padding: 5px;

  margin-bottom: 6px;
  font-weight: 700;
  font-size: 14px;
  color: #202020;
  transition: all 0.2s;
}

.app-header__sidebar nav ul li a {
  margin-left: 10px;
}

.app-header__sidebar nav ul li:hover {
  background-color: #202020;
  color: white;
}
.app-header__social-sidebar {
  display: block;
}
.app-header__social {
  display: none;
}

.app-header__social-sidebar {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
