<template>
  <div class="login-link-button">
    <WhiteButton label="ログイン" @click="handleClick" />
  </div>
</template>

<script>
import WhiteButton from '@/components/atoms/Button/WhiteButton.vue'

export default {
  name: 'LoginLinkButton',
  components: {
    WhiteButton
  },
  methods: {
    handleClick () {
      this.$router.push('/login')
    }
  }
}
</script>
