<template>
  <section class="auth-layout">
    <div class="auth-layout__half">
      <slot />
    </div>

    <div class="auth-layout__half">
      <img
        class="object-cover w-full h-full rounded-2xl"
        src="https://klike.net/uploads/posts/2022-09/1663649682_g-7.jpg"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.auth-layout {
  @apply container mx-auto flex gap-5 items-center h-full py-8;
}

.auth-layout__half {
  @apply w-1/2 flex items-center justify-center h-full;
}
</style>
