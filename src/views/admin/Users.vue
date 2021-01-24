<template>
  <div class="users">
    <div class="container max-width is-max-desktop">
      <section class="section">
        <div class="container">
          <UsersTable :users="users" @edit="edit" />
        </div>
      </section>
    </div>
    <UserModal v-if="modal" :userId="userId" @close="closeModal" />
  </div>
</template>

<script>
import UsersTable from '@/components/organisms/UsersTable.vue'
import UserModal from '@/components/organisms/UserModal.vue'
import RepositoryFactory from '@/api/RepositoryFactory'

const UsersRepository = RepositoryFactory.get('users')

export default {
  name: 'Users',
  components: {
    UsersTable,
    UserModal
  },
  data () {
    return {
      users: [],
      userId: 0,
      modal: false
    }
  },
  created () {
    this.fetch()
  },
  mounted () {
    document.title = 'ユーザー 一覧 | Ryo.gift'
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
      const { data } = await UsersRepository.get()
      this.users = data
    }
  }
}
</script>
