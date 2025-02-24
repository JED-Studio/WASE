<template>
  <div class="app-principles__section">
    <div class="app-wace__container">
      <div class="app-principles">
        <h2>Принципы работы</h2>
        <div class="app-principles__items">
          <div
            class="app-principles__item border border-slate-100 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <img src="" alt="" />
            <h3>Product Market Fit</h3>
            <p>
              При создании продукта важно соответствие ожиданиям целевой аудитории, гармоничное
              сочетание с рынком, позволяющее повысить прибыль.
            </p>
          </div>
          <div
            class="app-principles__item border border-slate-100 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <img src="" alt="" />
            <h3>AARRR</h3>
            <p>
              Инструмент с которым мы помогаем увеличивать два жизненно важных для продукта
              показателя: количество активных пользователей и выручку
            </p>
          </div>
          <div
            class="app-principles__item border border-slate-100 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
          >
            <img src="" alt="" />
            <h3>Expansion Stage</h3>
            <p>
              Цели MVP достигнуты, стартап начинают продвигать на новых рынках. Стартап пользуется
              стабильным спросом, доходы постепенно растут.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-principles__section {
  margin-bottom: 100px;
}
.app-principles__items {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.app-principles__item {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
}

.app-principles__item > h3 {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 28px;
  margin-bottom: 10px;
}
.app-principles__item > p {
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 24px;
}

.app-principles > h2 {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 28px;
  color: black;
}

@media (max-width: 768px) {
  .app-principles__items {
    flex-direction: column;
  }
}
</style>
