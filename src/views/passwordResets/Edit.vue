<template>
  <div class="password-resets-edit">
    <div class="container max-width is-max-desktop">
      <PasswordResetEditSection />
    </div>
  </div>
</template>

<script>
import PasswordResetEditSection from '@/components/organisms/PasswordResetEditSection.vue'

export default {
  name: 'PasswordResetEdit',
  components: {
    PasswordResetEditSection
  },
  mounted () {
    document.title = 'パスワードのリセット | Ryo.gift'
  }
}
</script>

<style scoped>
.max-width {
  max-width: 600px;
}
</style>
