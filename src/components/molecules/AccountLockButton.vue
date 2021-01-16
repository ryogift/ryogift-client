<template>
  <WarningButton class="account-lock-button" label="アカウントロック" />
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
