<template>
  <ul class="error-messages">
    <li class="help is-danger" v-for="errorMessage in errorMessages" :key="errorMessage">
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ErrorMessages',
  props: {
    errorMessages: Array
  }
}
</script>
