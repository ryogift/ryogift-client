<template>
  <div class="input-form mb-3">
    <label class="label">{{ label }}</label>
    <div class="field">
      <div class="control">
        <input class="input" v-bind="$attrs" :value="value"
               :class="{ 'is-danger': hasError }"
               @input="$emit('update:value', $event.target.value)">
      </div>
      <ul v-for="errorMessage in errorMessages" :key="errorMessage">
        <li class="help is-danger" v-if="hasError">{{ errorMessage }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  inheritAttrs: false,
  props: {
    label: String,
    value: String,
    hasError: Boolean,
    errorMessages: Array
  }
}
</script>
