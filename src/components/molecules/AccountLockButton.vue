<template>
  <div class="account-lock-button">
    <WarningButton label="アカウントロック" />
  </div>
</template>

<script>
import WarningButton from '@/components/atoms/Button/WarningButton.vue'

export default {
  name: 'AccountLockButton',
  components: {
    WarningButton
  }
}
</script>
