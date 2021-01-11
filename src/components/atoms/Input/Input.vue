<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="field">
      <div class="control">
        <input class="input" v-bind="$attrs" :value="value"
               @input="$emit('update:value', $event.target.value)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  inheritAttrs: false,
  props: {
    label: String,
    value: String
  }
}
</script>
