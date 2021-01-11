<template>
  <div class="signup-section m">
    <section class="section m-1 border-frame">
      <h1 class="title">アカウント登録</h1>
      <form @submit.prevent="handleSubmit">
        <Input type="text" label="名前" v-model:value="name" />
        <Input type="email" label="メールアドレス" v-model:value="email" />
        <Input type="password" label="パスワード（6文字以上）" v-model:value="password" />
        <Input type="password" label="パスワードの再確認" v-model:value="passwordConfirmation" />
        <SubmitButton class="mt-5 mb-4" label="アカウント登録" />
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

const UsersRepository = ReposiotryFactory.get('users')

export default {
  name: 'SignupSection',
  components: {
    Input,
    SubmitButton,
    InfoNotification,
    ErrorNotification
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      infoMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const param = {
          user: {
            name: this.name,
            email: this.email,
            password: this.password,
            passwordConfirmation: this.passwordConfirmation
          }
        }
        await UsersRepository.signup(param)
        this.infoMessage = 'メールをチェックしてアカウントを有効にしてください。'
        this.name = ''
        this.email = ''
        this.password = ''
        this.passwordConfirmation = ''
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
  height: 580px;
}
.m {
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
