<template>
  <div class="login">
    <div class="container max-width is-max-desktop">
      <LoginSection />
    </div>
  </div>
</template>

<script>
import LoginSection from '@/components/organisms/LoginSection.vue'

export default {
  name: 'Login',
  components: {
    LoginSection
  },
  mounted () {
    document.title = 'ログイン | Ryo.gift'
  }
}
</script>

<style scoped>
.max-width {
  max-width: 600px;
}
</style>
