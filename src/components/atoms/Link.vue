<template>
  <a class="link">
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    label: String
  }
}
</script>
