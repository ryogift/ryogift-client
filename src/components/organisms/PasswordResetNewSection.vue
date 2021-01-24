<template>
  <div class="password-reset-new-section m">
    <section class="section m-1 border-frame">
      <h1 class="title">パスワードのリセット</h1>
      <p>アカウントのメールアドレスをご入力ください。</p>
      <p>パスワードリセットのメールを送信します。</p>
      <form class="mt-1" @submit.prevent="handleSubmit">
        <InputForm label="メールアドレス" type="email" class="email"
                   :hasError="email.hasError" :errorMessages="email.errorMessages"
                   v-model:value="email.value" />
        <SubmitButton class="mt-5 mb-4" label="送信" />
      </form>
      <InfoNotification v-if="infoMessage" :message="infoMessage" />
      <ErrorNotification v-if="errorMessage" :message="errorMessage" />
    </section>
  </div>
</template>

<script>
import InputForm from '@/components/molecules/InputForm.vue'
import SubmitButton from '@/components/molecules/SubmitButton.vue'
import InfoNotification from '@/components/atoms/Notification/InfoNotification.vue'
import ErrorNotification from '@/components/atoms/Notification/ErrorNotification.vue'
import AuthRepository from '@/api/AuthRepository'

export default {
  name: 'PasswordResetNewSection',
  components: {
    InputForm,
    SubmitButton,
    InfoNotification,
    ErrorNotification
  },
  data () {
    return {
      email: {
        value: '',
        hasError: false,
        errorMessages: []
      },
      infoMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit () {
      this.infoMessage = ''
      this.errorMessage = ''
      this.email.hasError = false
      this.email.errorMessages = []
      try {
        const param = {
          user: {
            email: this.email.value
          }
        }
        await AuthRepository.passwordResetsCreate(param)
        this.infoMessage = 'パスワードのリセットについてのメールを送信しました。'
        this.email.value = ''
      } catch (e) {
        const { status, data } = e.response
        const expectedStatuses = [404]
        if (expectedStatuses.includes(status) && data.error !== undefined) {
          this.errorMessage = data.error.message
        } else if (status === 422) {
          const { email } = data
          if (email !== undefined) {
            this.email.hasError = true
            this.email.errorMessages = email
          }
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
  min-height: 380px;
}
.m {
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
