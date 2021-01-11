<template>
  <button class="button">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String
  }
}
</script>
