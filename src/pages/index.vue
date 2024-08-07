<template>
</template>

<script>
import { defineComponent } from 'vue'
import { navigateTo } from 'nuxt/app';
export default defineComponent({
  name: 'MainPage',

  setup() {
    navigateTo('/auth/login')
  },
})
</script>
