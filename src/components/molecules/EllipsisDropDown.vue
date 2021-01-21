<template>
  <div class="ellipsis-drop-down dropdown is-right" :class="{ 'is-active': isDropDown }">
    <div class="dropdown-trigger">
      <EllipsisButton aria-haspopup="true" aria-controls="dropdown-menu" @click="toggleDropDown" />
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <EditLinkButton class="dropdown-item" @click="openModal" />
        <RemoveLinkButton class="dropdown-item" @click="remove" />
      </div>
    </div>
  </div>
</template>

<script>
import EllipsisButton from '@/components/molecules/EllipsisButton.vue'
import EditLinkButton from '@/components/molecules/EditLinkButton.vue'
import RemoveLinkButton from '@/components/molecules/RemoveLinkButton.vue'

export default {
  name: 'EllipsisDropDown',
  components: {
    EllipsisButton,
    EditLinkButton,
    RemoveLinkButton
  },
  props: {
    isDropDown: Boolean
  },
  methods: {
    toggleDropDown () {
      this.$emit('toggle')
    },
    openModal () {
      this.$emit('close')
      this.$emit('modal')
    },
    remove () {
      this.$emit('close')
      this.$emit('remove')
    }
  }
}
</script>

<style scoped>
.ellipsis-button {
  height: 30px;
}
.ellipsis-button:hover {
  background-color: white !important;
}
.dropdown-menu {
  z-index: 13;
}
</style>
