<script>
import { defineComponent } from 'vue'
import AppSwitch from './AppSwitch.vue'

export default defineComponent({
  components: {
    AppSwitch,
  },
  setup() {},
})
</script>

<template>
  <header>
    <div class="app-wace__container">
      <div class="app-header">
        <div class="app-header__left">
          <RouterLink class="app-header__logo" to="/">
            <img width="60" height="60" src="/public/вектор.svg" alt="" />
          </RouterLink>
          <nav>
            <ul>
              <li><RouterLink to="/about">О нас</RouterLink></li>
              <li><a href="#">Услуги</a></li>
              <li><RouterLink to="/projects">Проекты</RouterLink></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </nav>
        </div>

        <div class="app-header__right">
          <div class="app-header__lang"></div>
          <div class="app-header__switch">
            <AppSwitch />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  margin-top: 20px;
  margin-bottom: 100px;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 14px 20px;
  border-radius: 20px;
}

.app-header__left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.app-header__right {
  display: flex;
  align-items: center;
  gap: 6px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  margin-right: 24px;
  color: #202020;
}

.app-header__menu {
  display: flex;
  align-items: center;
  padding: 6px 16px;
  gap: 8px;
}

.app-header__profile {
  display: flex;
  align-items: center;
  background-color: #efefef;
  border-radius: 20px;
  gap: 10px;
  p {
    margin-left: 16px;
  }
}

.app-header__avatar {
  width: 32px;
  height: 32px;
  margin: 3px 3px 3px 0px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
