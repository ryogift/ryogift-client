<template>
  <div class="password-reset-edit-section m">
    <section class="section m-1 border-frame">
      <h1 class="title">パスワードのリセット</h1>
      <form class="mt-1" @submit.prevent="handleSubmit">
        <Input type="password" label="パスワード（6文字以上）" v-model:value="password" />
        <Input type="password" label="パスワードの再確認" v-model:value="passwordConfirmation" />
        <SubmitButton class="mt-5 mb-4" label="パスワード更新" />
      </form>
      <InfoNotification v-if="infoMessage" :message="infoMessage" />
      <ErrorNotification v-if="errorMessage" :message="errorMessage" />
    </section>
  </div>
</template>

<script>
import Input from '@/components/atoms/Input/Input.vue'
import SubmitButton from '@/components/molecules/SubmitButton.vue'
import InfoNotification from '@/components/atoms/Notification/InfoNotification.vue'
import ErrorNotification from '@/components/atoms/Notification/ErrorNotification.vue'
import { ReposiotryFactory } from './../../api/RepositoryFactory'

const AuthRepository = ReposiotryFactory.get('auth')

export default {
  name: 'PasswordResetEditSection',
  components: {
    Input,
    SubmitButton,
    InfoNotification,
    ErrorNotification
  },
  data () {
    return {
      token: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      infoMessage: '',
      errorMessage: ''
    }
  },
  created () {
    const { token, email } = this.$route.query
    this.token = token
    this.email = email
  },
  methods: {
    async handleSubmit () {
      try {
        this.infoMessage = ''
        this.errorMessage = ''
        const param = {
          user: {
            email: this.email,
            password: this.password,
            passwordConfirmation: this.passwordConfirmation
          }
        }
        await AuthRepository.passwordResetsUpdate(this.token, param)
        this.infoMessage = 'パスワードがリセットされました。'
      } catch (e) {
        const { status, data } = e.response
        const expectedStatuses = [401, 403, 423]
        if (expectedStatuses.includes(status)) {
          this.errorMessage = data.error.message
        } else {
          this.errorMessage = '予期せぬエラーです。'
        }
      } finally {
        this.password = ''
        this.passwordConfirmation = ''
      }
    }
  }
}
</script>

<style scoped>
.border-frame {
  border: 1px solid #c5c4c4;
  border-radius: 0.25rem;
  height: 410px;
}
.m {
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
