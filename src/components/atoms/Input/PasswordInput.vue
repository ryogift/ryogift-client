<template>
  <div class="password-input control has-icons-left">
    <input class="password-input input" type="password" placeholder="パスワード"
           :value="value" @input="$emit('update:value', $event.target.value)">
    <span class="icon is-small is-left">
      <font-awesome-icon icon="lock" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'PasswordInput',
  props: {
    value: String
  }
}
</script>
