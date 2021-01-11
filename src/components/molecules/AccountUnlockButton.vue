<template>
  <div class="account-unlock-button">
    <PrimaryButton label="アカウントロック解除" />
  </div>
</template>

<script>
import PrimaryButton from '@/components/atoms/Button/PrimaryButton.vue'

export default {
  name: 'AccountUnlockButton',
  components: {
    PrimaryButton
  }
}
</script>
