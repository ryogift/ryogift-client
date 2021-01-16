<template>
  <Logo class="logo-home-link" @click="handleClick" />
</template>

<script>
import Logo from '@/components/atoms/Logo.vue'

export default {
  name: 'LogoHomeLink',
  components: {
    Logo
  },
  methods: {
    handleClick () {
      this.$router.push('/')
    }
  }
}
</script>
