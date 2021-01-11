<template>
  <button class="link-button button is-link">{{ label }}</button>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    label: String
  }
}
</script>
