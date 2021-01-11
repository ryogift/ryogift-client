<template>
  <button class="warning-button button is-warning">{{ label }}</button>
</template>

<script>
export default {
  name: 'WarningButton',
  props: {
    label: String
  }
}
</script>
