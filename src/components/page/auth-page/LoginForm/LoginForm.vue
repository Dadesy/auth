<template>
  <vee-form
    class="form"
    :validation-schema="validationSchema"
    @submit="onSubmit"
  >
    <div class="form__item">
      <label class="form__label">
        <span class="label__text">Почта</span>
        <vee-field
          name="email"
          type="email"
          placeholder="Example@email.com"
          class="form__input"
          autocomplete="username"
        />
        <vee-error-message class="form__error-message" name="email" />
      </label>
    </div>

    <div class="form__item">
      <label class="form__label">
        <span class="label__text">Пароль</span>
        <vee-field
          name="password"
          type="password"
          placeholder="Пароль должен содержать 8 символов"
          class="form__input"
          autocomplete="current-password"
        />
        <vee-error-message class="form__error-message" name="password" />
      </label>
    </div>


    <button
      type="submit"
      class="form__submit-button"
    >Войти</button>
  </vee-form>
</template>

<script lang="ts" src="./LoginForm.ts"></script>

<style lang="scss" scoped src="./LoginForm.scss" />
