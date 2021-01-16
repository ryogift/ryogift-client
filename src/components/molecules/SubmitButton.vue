<template>
  <InfoButton class="submit-button w-100" :label="label" type="submit" />
</template>

<script>
import InfoButton from '@/components/atoms/Button/InfoButton.vue'

export default {
  name: 'SubmitButton',
  components: {
    InfoButton
  },
  props: {
    label: String
  }
}
</script>

<style scoped>
.w-100 {
  width: 100%;
}
</style>
