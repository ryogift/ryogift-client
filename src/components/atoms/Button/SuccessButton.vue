<template>
  <button class="success-button button is-success">{{ label }}</button>
</template>

<script>
export default {
  name: 'SuccessButton',
  props: {
    label: String
  }
}
</script>
