<template>
  <div class="users">
    <div class="container max-width is-max-desktop">
      <Loading v-if="isLoading" />
      <UsersTable v-else :users="users" @edit="edit" />
    </div>
    <UserModal v-if="modal" :userId="userId" @close="closeModal" />
  </div>
</template>

<script>
import UsersTable from '@/components/organisms/UsersTable.vue'
import UserModal from '@/components/organisms/UserModal.vue'
import Loading from '@/components/atoms/Loading.vue'
import { ReposiotryFactory } from './../api/RepositoryFactory'

const UsersRepository = ReposiotryFactory.get('users')

export default {
  name: 'Users',
  components: {
    UsersTable,
    UserModal,
    Loading
  },
  data () {
    return {
      isLoading: true,
      users: [],
      userId: 0,
      modal: false
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    edit (id) {
      this.userId = id
      this.modal = true
    },
    closeModal () {
      this.modal = false
    },
    async fetch () {
      this.isLoading = true
      const { data } = await UsersRepository.get()
      this.users = data
      this.isLoading = false
    }
  }
}
</script>
