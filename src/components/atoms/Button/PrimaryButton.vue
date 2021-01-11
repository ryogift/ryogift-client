<template>
  <button class="primary-button button is-primary">{{ label }}</button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    label: String
  }
}
</script>
