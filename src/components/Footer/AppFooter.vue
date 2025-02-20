<template>
  <div class="app-footer__section">
    <div class="app-wace__container">
      <div class="app-footer">
        <div class="app-footer__contact">
          <div class="app-footer__logo">
            <img src="/public/вектор.svg" alt="" />
          </div>
          <ul>
            <li><a href="#">+7 (123) 456-78-90</a></li>
            <li><a href="#">gogo@mail.ru</a></li>
            <li><a href="#">Махачкала, ул. Мирзабекова, д. 18</a></li>
            <li><a href="#">ИНН: 0573017607</a></li>
          </ul>
        </div>
        <div class="app-footer__contact">
          <div class="app-footer__title">
            <a class="app-footer__company" href="#">Компания</a>
          </div>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Блог</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Блог</a></li>
          </ul>
        </div>
        <div class="app-footer__contact">
          <div class="app-footer__title">
            <a class="app-footer__company" href="#">Услуги</a>
          </div>
          <ul>
            <li><a href="#">Мобильная разработка</a></li>
            <li><a href="#">Создание MVP</a></li>
            <li><a href="#">Web-разработка</a></li>
          </ul>
        </div>
        <div class="app-footer__contact">
          <div class="app-footer__title">
            <a class="app-footer__company" href="#">Проекты</a>
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

.app-footer__contact ul > li {
  margin-bottom: 5px;
}

.app-footer__contact ul li > a {
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  color: #454950b3;
}
</style>
