<template>
  <div class="save-button">
    <SuccessButton label="保存" />
  </div>
</template>

<script>
import SuccessButton from '@/components/atoms/Button/SuccessButton.vue'

export default {
  name: 'SaveButton',
  components: {
    SuccessButton
  }
}
</script>
