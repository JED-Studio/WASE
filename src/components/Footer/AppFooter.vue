<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const open = ref({
      company: false,
      contacts: false,
      project: false,
    })
    const option = (section) => {
      open.value[section] = !open.value[section]
    }

    return {
      open,
      option,
    }
  },
})
</script>
<template>
  <div class="app-footer__section">
    <div class="app-wace__container">
      <div class="app-footer">
        <div class="app-footer__contact">
          <div class="app-footer__logo">
            <img src="/public/image/вектор.svg" alt="" />
          </div>
          <ul>
            <li><a href="#">+7 (992) 555-55-20</a></li>
            <li><a href="#">wace@work-mix.ru</a></li>
            <li><a href="#">Махачкала, ул. Мирзабекова, д. 18</a></li>
            <li><a href="#">ИНН: 053006741690</a></li>
          </ul>
        </div>
        <div
          class="app-footer__contact-right"
          :class="{ 'app-footer__contact-right--active-1': open.company }"
        >
          <div class="app-footer__title" @click="option('company')">
            <a class="app-footer__company">Компания</a>
          </div>
          <ul>
            <li><RouterLink to="/about">О нас</RouterLink></li>
          </ul>
        </div>
        <div
          class="app-footer__contact-right"
          :class="{ 'app-footer__contact-right--active-2': open.contacts }"
        >
          <div class="app-footer__title" @click="option('contacts')">
            <a class="app-footer__company">Услуги</a>
          </div>
          <ul>
            <li><a href="#">Мобильная разработка</a></li>
            <li><a href="#">Создание MVP</a></li>
            <li><a href="#">Web-разработка</a></li>
          </ul>
        </div>
        <div
          class="app-footer__contact-right"
          :class="{ 'app-footer__contact-right--active-3': open.project }"
        >
          <div class="app-footer__title" @click="option('project')">
            <a class="app-footer__company">Проекты</a>
          </div>
          <ul>
            <li><a href="#">Платформа для Российского венчурного форума</a></li>
            <li><a href="#">Платформа для Российского венчурного форума</a></li>
            <li><a href="#">Платформа для Российского венчурного форума</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app-footer__logo {
  margin-bottom: 20px;
}

.app-footer__title {
  margin-bottom: 8px;
}

.app-footer__section {
  background-color: white;
}

.app-footer {
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
}

.app-footer__company {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 28px;
  color: black;
}

.app-footer__contact-right ul > li {
  margin-bottom: 5px;
}

.app-footer__contact-right ul li > a {
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #454950b3;
}

@media (max-width: 768px) {
  .app-footer {
    display: block;
  }

  .app-footer__contact-right {
    overflow: hidden;
    height: 30px;
    margin-bottom: 10px;
    transition: height 0.2s;
  }

  .app-footer__contact-right--active-1 {
    height: 180px;
  }
  .app-footer__contact-right--active-2 {
    height: 125px;
  }
  .app-footer__contact-right--active-3 {
    height: 125px;
  }
}
</style>
