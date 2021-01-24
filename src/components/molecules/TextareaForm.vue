<template>
  <div class="textarea-form mb-3">
    <div class="field">
      <div class="control">
        <textarea class="textarea" :value="value" ref="textarea"
               :class="{ 'is-danger': hasError }"
               @input="$emit('update:value', $event.target.value)" />
      </div>
      <ErrorMessages v-if="hasError" :errorMessages="errorMessages" />
    </div>
  </div>
</template>

<script>
import ErrorMessages from '@/components/atoms/ErrorMessages.vue'

export default {
  name: 'TextareaForm',
  components: {
    ErrorMessages
  },
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
