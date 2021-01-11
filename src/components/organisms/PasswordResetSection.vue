<template>
  <div class="password-reset-section m">
    <section class="section m-1 border-frame">
      <h1 class="title">パスワードのリセット</h1>
      <p>アカウントのメールアドレスをご入力ください。</p>
      <p>パスワードリセットのメールを送信します。</p>
      <form class="mt-1" @submit.prevent="handleSubmit">
        <Input type="email" label="メールアドレス" v-model:value="email" />
        <SubmitButton class="mt-5 mb-4" label="送信" />
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
  name: 'PasswordResetSection',
  components: {
    Input,
    SubmitButton,
    InfoNotification,
    ErrorNotification
  },
  data () {
    return {
      email: '',
      infoMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const param = {
          email: this.email
        }
        await AuthRepository.passwordResets(param)
        this.infoMessage = 'パスワードリセットについてのメールを送信しました。'
        this.email = ''
      } catch (e) {
        const { status, data } = e.response
        this.password = ''
        const expectedStatuses = [401, 403, 423]
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
.border-frame {
  border: 1px solid #c5c4c4;
  border-radius: 0.25rem;
  height: 380px;
}
.m {
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
