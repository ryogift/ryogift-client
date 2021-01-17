<template>
  <div class="user-modal">
    <div class="modal show">
      <div class="modal-background" @click="close"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">ユーザー編集</p>
          <button class="delete" aria-label="close" @click="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column">ID</div>
            <div class="column">{{ id }}</div>
          </div>
          <div class="columns">
            <div class="column">名前</div>
            <div class="column">{{ name }}</div>
          </div>
          <div class="columns">
            <div class="column">メールアドレス</div>
            <div class="column">{{ email }}</div>
          </div>
          <div class="columns">
            <div class="column">状態</div>
            <div class="column">{{ displayState }}</div>
          </div>
          <div class="columns">
            <div class="column">権限</div>
            <div class="column">{{ displayRole }}</div>
          </div>
          <div class="columns">
            <div class="column">アカウント作成日時</div>
            <div class="column">{{ displayCreatedAt }}</div>
          </div>
          <div class="columns">
            <div class="column">アクティブ日時</div>
            <div class="column">{{ displayActivatedAt }}</div>
          </div>
          <div class="columns">
            <div class="column">ロック日時</div>
            <div class="column">{{ displayLockedAt }}</div>
          </div>
        </section>
        <footer class="modal-card-foot right">
          <CancelButton class="cancel" @click="close" />
          <AccountLockButton v-if="!displayLockedAt" @click="lock" />
          <AccountUnlockButton v-if="displayLockedAt" @click="unlock" />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import AccountLockButton from '@/components/molecules/AccountLockButton.vue'
import AccountUnlockButton from '@/components/molecules/AccountUnlockButton.vue'
import CancelButton from '@/components/molecules/CancelButton.vue'
import RepositoryFactory from '@/api/RepositoryFactory'

const UsersRepository = RepositoryFactory.get('users')

export default {
  name: 'UserModal',
  components: {
    AccountLockButton,
    AccountUnlockButton,
    CancelButton
  },
  props: {
    userId: Number
  },
  data () {
    return {
      id: '',
      name: '',
      email: '',
      displayState: '',
      displayRole: '',
      displayCreatedAt: '',
      displayActivatedAt: '',
      displayLockedAt: ''
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    close () {
      this.$emit('close')
    },
    async fetch () {
      const { data } = await UsersRepository.getUser(this.userId)
      this.id = data.id
      this.name = data.name
      this.email = data.email
      this.displayState = data.displayState
      this.displayRole = data.displayRole
      this.displayCreatedAt = data.displayCreatedAt
      this.displayActivatedAt = data.displayActivatedAt
      this.displayLockedAt = data.displayLockedAt
    },
    async lock () {
      await UsersRepository.lock(this.userId)
      this.fetch()
    },
    async unlock () {
      await UsersRepository.unlock(this.userId)
      this.fetch()
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
  padding-top: 40px;
}
</style>
