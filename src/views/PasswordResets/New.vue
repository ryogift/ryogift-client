<template>
  <div class="password-resets-new">
    <div class="container max-width is-max-desktop">
      <PasswordResetNewSection />
    </div>
  </div>
</template>

<script>
import PasswordResetNewSection from '@/components/organisms/PasswordResetNewSection.vue'

export default {
  name: 'PasswordResetsNew',
  components: {
    PasswordResetNewSection
  }
}
</script>

<style scoped>
.max-width {
  max-width: 600px;
}
</style>
