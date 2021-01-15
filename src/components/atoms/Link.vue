<template>
  <a class="link" @click="handleClick">
    {{ label }}
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
