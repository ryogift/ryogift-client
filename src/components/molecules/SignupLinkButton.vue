<template>
  <Button class="signup-link-button" label="新規登録" />
</template>

<script>
import Button from '@/components/atoms/Button/Button.vue'

export default {
  name: 'SignupLinkButton',
  components: {
    Button
  }
}
</script>

<style scoped>
.signup-link-button {
  border: none;
  color: white;
  background-color: #008eb4;
}
.signup-link-button:hover {
  border: none;
  color: white;
  background-color: #017b9c;
}
</style>
