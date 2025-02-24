<script>
import { defineComponent, ref } from 'vue'
import AppSidebar from './AppSidebar.vue'

export default defineComponent({
  components: {
    AppSidebar,
  },
  setup() {
    const open = ref(false)
    const option = () => {
      open.value = !open.value
    }

    return {
      open,
      option,
    }
  },
})
</script>

<template>
  <div class="app-header__shadow"></div>
  <header>
    <div class="app-wace__container">
      <div class="app-header">
        <div class="app-header__left">
          <RouterLink class="app-header__logo" to="/">
            <img width="60" height="60" src="/public/image/вектор.svg" alt="" />
          </RouterLink>
          <div class="app-header__block">
            <nav>
              <ul>
                <li><RouterLink to="/about">О нас</RouterLink></li>
                <li><RouterLink to="/services">Услуги</RouterLink></li>
                <li><RouterLink to="/projects">Проекты</RouterLink></li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="app-header__right">
          <div class="app-header__lang"></div>
          <div class="app-header__switch"></div>
          <div class="app-header__social">
            <a href="https://instagram.com/waceio">
              <img width="30" src="/public/svg/instagram.svg" alt="" />
            </a>
            <a href="https://t.me/waceiu ">
              <img width="30" src="/public/svg/telegram.svg" alt="" />
            </a>
            <a href=""> <img width="30" src="/public/svg/whatsapp.svg" alt="" /></a>
          </div>
          <div class="app-header__menu">
            <img width="30" height="30" src="/public/svg/icons8-menu.svg" alt="" @click="option" />
          </div>
        </div>
      </div>
    </div>
    <AppSidebar :open="open" @option="option" />
  </header>
</template>

<style lang="scss">
.app-header__social {
  display: flex;
  align-items: center;
  gap: 10px;
}

.app-header__social-sidebar {
  display: none;
}

.app-header__shadow {
  margin-bottom: 100px;
}

.app-header {
  display: block;
}

.app-header > img {
  display: none;
}

header {
  margin-top: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99999;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 14px 20px;
  border-radius: 20px;
  box-shadow: 0 5px 5px 0 #00000017;
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

.app-header__block nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.app-header__block nav ul li {
  display: inline-block;
}

.app-header__block nav ul li a {
  font-weight: 700;
  font-size: 14px;
  margin-right: 24px;
  color: #202020;
}

.app-header__menu > img {
  display: none;
}

@media (max-width: 768px) {
  .app-header__menu > img {
    display: block;
  }

  .app-header__block nav ul li {
    display: none;
  }

  .app-header__social {
    display: none;
  }
}
</style>
