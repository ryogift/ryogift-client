<template>
  <div class="signup">
    <div class="container max-width is-max-desktop">
      <SignupSection />
    </div>
  </div>
</template>

<script>
import SignupSection from '@/components/organisms/SignupSection.vue'

export default {
  name: 'Signup',
  components: {
    SignupSection
  },
  mounted () {
    document.title = '新規登録 | RyoGIFT'
  }
}
</script>

<style scoped>
.max-width {
  max-width: 600px;
}
</style>
