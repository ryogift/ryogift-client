<template>
  <div class="textarea-form mb-3">
    <div class="field">
      <div class="control">
        <textarea class="textarea" :value="value" ref="textarea"
               :class="{ 'is-danger': hasError }"
               @input="$emit('update:value', $event.target.value)" />
      </div>
      <ul v-if="hasError">
        <li class="help is-danger" v-for="errorMessage in errorMessages" :key="errorMessage">
          {{ errorMessage }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaForm',
  props: {
    value: String,
    hasError: Boolean,
    errorMessages: Array
  },
  methods: {
    focusTextarea () {
      this.$refs.textarea.focus()
    }
  },
  mounted () {
    this.focusTextarea()
  }
}
</script>
