<template>
  <div class="info-notification notification is-info is-light p-3">{{ message }}</div>
</template>

<script>
export default {
  name: 'InfoNotification',
  props: {
    message: String
  }
}
</script>
