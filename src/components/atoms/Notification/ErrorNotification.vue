<template>
  <div class="error-notification notification is-danger is-light p-3">{{ message }}</div>
</template>

<script>
export default {
  name: 'ErrorNotification',
  props: {
    message: String
  }
}
</script>
