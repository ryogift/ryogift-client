<template>
  <a class="link">
    <span @click="handleClick">{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    label: String
  },
  methods: {
    handleClick () {
      this.$emit('link')
    }
  }
}
</script>
