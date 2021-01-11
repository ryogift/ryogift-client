<template>
  <div class="remove-button">
    <DangerButton label="削除" />
  </div>
</template>

<script>
import DangerButton from '@/components/atoms/Button/DangerButton.vue'

export default {
  name: 'RemoveButton',
  components: {
    DangerButton
  }
}
</script>
