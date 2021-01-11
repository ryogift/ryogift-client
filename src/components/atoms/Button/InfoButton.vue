<template>
  <button class="info-button button is-info">{{ label }}</button>
</template>

<script>
export default {
  name: 'InfoButton',
  props: {
    label: String
  }
}
</script>
