<template>
  <div class="input-form mb-3">
    <label class="label">{{ label }}</label>
    <div class="field">
      <div class="control">
        <input class="input" v-bind="$attrs" :value="value"
               :class="{ 'is-danger': hasError }"
               @input="$emit('update:value', $event.target.value)">
      </div>
      <ErrorMessages v-if="hasError" :errorMessages="errorMessages" />
    </div>
  </div>
</template>

<script>
import ErrorMessages from '@/components/atoms/ErrorMessages.vue'

export default {
  name: 'InputForm',
  inheritAttrs: false,
  components: {
    ErrorMessages
  },
  props: {
    label: String,
    value: String,
    hasError: Boolean,
    errorMessages: Array
  }
}
</script>
