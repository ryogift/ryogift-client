<template>
  <PrimaryButton class="signup-link-button" label="新規登録" @click="handleClick" />
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
