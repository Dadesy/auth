<template>
  <card-wrapper
    title="Добро пожаловать  👋"
    description="Сегодня новый день. Это твой день. Ты его формируешь."
  >
    <template v-slot:formBody>
      <login-form
        @on-submit="onsubmit"
      />
    </template>
  </card-wrapper>
</template>

<script lang="ts" src="./LoginUser.ts"/>

<style lang="scss" scoped src="./LoginUser.scss"/>
