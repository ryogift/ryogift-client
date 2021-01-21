<template>
  <div class="update-password">
    <div class="container max-width is-max-desktop">
      <UpdatePasswordSection />
    </div>
  </div>
</template>

<script>
import UpdatePasswordSection from '@/components/organisms/UpdatePasswordSection.vue'

export default {
  name: 'UpdatePassword',
  components: {
    UpdatePasswordSection
  },
  mounted () {
    document.title = 'パスワードの変更 | Ryo.gift'
  }
}
</script>

<style scoped>
.max-width {
  max-width: 600px;
}
</style>
