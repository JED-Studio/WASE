<script>
import { defineComponent, onMounted, ref, provide } from 'vue'
import LogoIcon from '../icons/LogoIcon.vue'

export default defineComponent({
  components: {
    LogoIcon,
  },

  props: {
    openModal: Boolean,
  },
  setup(__, { emit }) {
    const closeModal = () => {
      emit('closeModal')
    }

    return {
      closeModal,
    }
  },
})
</script>

<template>
  <div class="app-modal__section" :class="{ 'fade-out': !openModal }">
    <div class="app-modal__container">
      <div class="app-modal">
        <div class="app-modal__inputs">
          <div class="app-modal__contact">
            <h2>Отправь заявку</h2>
            <p>Укажите свои данные и мы свяжемся с Вами в ближайшее время.</p>
          </div>
          <div class="app-modal__form">
            <div class="app-modal__form__item">
              <p>Имя</p>
              <input type="text" placeholder="Введите ваш запрос" />
            </div>
            <div class="app-modal__form__item">
              <p>Адрес e-mail <span class="required">*</span></p>
              <input type="text" placeholder="Введите ваш запрос" />
            </div>
            <div class="app-modal__form__item">
              <p>Request</p>
              <input type="text" placeholder="Введите ваш запрос" />
            </div>
          </div>
          <div class="app-modal__checkbox">
            "*" - поле обязательно для заполнения Отправляя заявку, я принимаю Условия обработки
            персональных данных WACE
          </div>
          <div class="app-modal__button">Отправить</div>
          <div class="app-modal__social">
            <div class="app-modal__social__item">
              <img src="/public/svg/social/whatsapp.svg" alt="" />
            </div>
            <div class="app-modal__social__item">
              <img src="/public/svg/social/email.svg" alt="" />
            </div>
            <div class="app-modal__social__item">
              <img src="/public/svg/social/telegram (1).svg" alt="" />
            </div>
            <div class="app-modal__social__item">
              <img src="/public/svg/social/instagram.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="app-modal__textarea">
          <img src="/public/svg/close.svg" alt="" @click="closeModal" />
          <LogoIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app-modal__checkbox {
  margin-bottom: 20px;
}
.app-modal__container {
  width: 100%;
  max-width: 750px;
}

.app-modal__contact {
  margin-bottom: 20px;
}

.app-modal__form__item {
  margin-bottom: 1.8rem;
}

.app-modal__form__item > p {
  font-weight: 500;
  font-size: 1rem;
  color: #333;
}

.app-modal__button {
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
}

input {
  width: 100%;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
}
.app-modal {
  padding: 20px;
  border-radius: 20px;
  background-color: aliceblue;
  display: flex;
}

.app-modal__social {
  justify-content: space-around;
  display: flex;
}
.app-modal__contact > h2 {
  font-size: 2rem;
  font-weight: 700;
}

.app-modal__social__item {
  height: 50px;
  width: 50px;
  font-size: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  border-radius: 19%;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.app-modal__social__item:hover {
  background-color: black;
  color: white;
}

.app-modal__social__item > img {
  width: 30px;
}

.app-modal__inputs {
  flex: 50%;
}
.app-modal__textarea {
  flex: 50%;
}

.app-modal__section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(105, 105, 105, 0.473);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
}

.fade-out {
  opacity: 0;
  visibility: hidden;
}
</style>
