<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
  setup() {},
})
</script>

<template>
  <div class="app-basicinfo__section">
    <div class="app-wace__container">
      <div class="app-basicinfo">
        <div class="app-basicinfo__left">
          <div class="app-basicinfo__logo">
            Профессиональная разработка Web-проектов и Мобильных приложений для бизнеса и стартапов
          </div>
        </div>
        <div class="app-basicinfo__right">
          <video autoplay loop muted class="app-basicinfo__video">
            <source src="/public/image/0001-0120.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-basicinfo__section {
  margin-bottom: 100px;
}

.app-basicinfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__left {
    flex: 50%;
  }
  &__right {
    display: flex;
    justify-content: center;
    flex: 50%;
  }
}

.app-basicinfo__logo {
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 71px;
  color: #000000;
  max-width: 1000px;
}

@media (max-width: 768px) {
  .app-basicinfo__logo {
    text-align: center;
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 50px;
  }
  .app-basicinfo__right {
    display: none;
  }
}
</style>
