<template>
  <div class="remove-modal">
    <div class="modal show pr-5">
      <div class="modal-background" @click="close"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">削除確認</p>
          <button class="delete" aria-label="close" @click="close"></button>
        </header>
        <section class="modal-card-body">
          <p>削除しますか？</p>
        </section>
        <footer class="modal-card-foot right">
          <CancelButton class="cancel" @click="close" />
          <RemoveButton class="remove" @click="remove" />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import CancelButton from '@/components/molecules/CancelButton.vue'
import RemoveButton from '@/components/molecules/RemoveButton.vue'

export default {
  name: 'RemoveModal',
  components: {
    CancelButton,
    RemoveButton
  },
  props: {
    id: Number
  },
  methods: {
    close () {
      this.$emit('close')
    },
    remove () {
      this.$emit('remove')
    }
  }
}
</script>

<style scoped>
.show {
  display: block;
}
.right {
  justify-content: flex-end;
}
.cancel {
  margin-right: 8px;
}
.modal-card {
  margin-top: 80px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  border-radius: 4px;
  border: 1px solid #dbdbdb;
}
.modal-background {
  background-color: rgb(156 156 156 / 29%)
}
</style>
