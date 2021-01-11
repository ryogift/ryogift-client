<template>
  <div class="email-input control has-icons-left">
    <input class="input" type="email" placeholder="メールアドレス"
           :value="value" @input="$emit('update:value', $event.target.value)">
    <span class="icon is-small is-left">
      <font-awesome-icon icon="envelope" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'EmailInput',
  props: {
    value: String
  }
}
</script>
