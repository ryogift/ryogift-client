<template>
  <div class="account-activations">
    <div class="container max-width is-max-desktop">
      <InfoNotification v-if="infoMessage" :message="infoMessage" />
      <ErrorNotification v-if="errorMessage" :message="errorMessage" />
    </div>
  </div>
</template>

<script>
import InfoNotification from '@/components/atoms/Notification/InfoNotification.vue'
import ErrorNotification from '@/components/atoms/Notification/ErrorNotification.vue'
import { ReposiotryFactory } from './../api/RepositoryFactory'

const AuthRepository = ReposiotryFactory.get('auth')

export default {
  name: 'AccountActivations',
  components: {
    InfoNotification,
    ErrorNotification
  },
  data () {
    return {
      infoMessage: '',
      errorMessage: ''
    }
  },
  created () {
    this.accountActivations()
  },
  methods: {
    async accountActivations () {
      try {
        const { token, email } = this.$route.query
        const { data } = await AuthRepository.accountActivations(token, email)
        this.$store.dispatch('login', { name: data.name, admin: data.admin })
        this.infoMessage = 'アカウントが有効になりました。'
      } catch (e) {
        const { status, data } = e.response
        const expectedStatuses = [401]
        if (expectedStatuses.includes(status)) {
          this.errorMessage = data.error.message
        } else {
          this.errorMessage = '予期せぬエラーです。'
        }
      }
    }
  }
}
</script>

<style scoped>
.max-width {
  max-width: 600px;
}
</style>
