<template>
  <div class="form">
    <div class="form-header">
      <h2 class="form-title">{{ title }}</h2>
      <p class="form-description">
        {{ description }}
      </p>
    </div>

    <div class="form-body">
      <slot name="formBody" />
    </div>

    <div class="form-footer">
      <slot name="formFooter" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.form {
  @apply font-montserrat text-slate-700 flex flex-col items-start gap-8 w-3/5;
}

.form-header {
  @apply w-full flex flex-col gap-3;
}

.form-title {
  @apply text-3xl font-bold tracking-wide leading-9 whitespace-pre;
}

.form-description {
  @apply text-base tracking-wide leading-6 font-medium text-justify;
}

.form-body {
  @apply w-full;
}

.form-footer {
  @apply text-center w-full;
}
</style>
