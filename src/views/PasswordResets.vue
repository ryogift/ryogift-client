<template>
  <div class="password-resets">
    <div class="container max-width is-max-desktop">
      <PasswordResetSection />
    </div>
  </div>
</template>

<script>
import PasswordResetSection from '@/components/organisms/PasswordResetSection.vue'

export default {
  name: 'PasswordResets',
  components: {
    PasswordResetSection
  }
}
</script>

<style scoped>
.max-width {
  max-width: 600px;
}
</style>
