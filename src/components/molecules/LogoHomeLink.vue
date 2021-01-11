<template>
  <div class="logo-home-link">
    <Logo @click="handleClick" />
  </div>
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
