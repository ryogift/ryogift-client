<template>
  <WhiteButton class="login-link-button" label="ログイン" @click="handleClick" />
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
