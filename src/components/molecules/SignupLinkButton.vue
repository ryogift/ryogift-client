<template>
  <div class="signup-link-button">
    <PrimaryButton label="新規登録" @click="handleClick" />
  </div>
</template>

<script>
import PrimaryButton from '@/components/atoms/Button/PrimaryButton.vue'

export default {
  name: 'SignupLinkButton',
  components: {
    PrimaryButton
  },
  methods: {
    handleClick () {
      this.$router.push('/signup')
    }
  }
}
</script>
