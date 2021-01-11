<template>
  <button class="danger-button button is-danger">{{ label }}</button>
</template>

<script>
export default {
  name: 'DangerButton',
  props: {
    label: String
  }
}
</script>
