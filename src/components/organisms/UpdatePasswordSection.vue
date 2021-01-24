<template>
  <div class="update-password-section m">
    <section class="section m-1 border-frame">
      <h1 class="title">パスワードの変更</h1>
      <form @submit.prevent="handleSubmit">
        <InputForm label="パスワード（6文字以上）" type="password" class="password"
                   :hasError="password.hasError" :errorMessages="password.errorMessages"
                   v-model:value="password.value" />
        <InputForm label="パスワードの再確認" type="password" class="password-confirmation"
                   :hasError="passwordConfirmation.hasError" :errorMessages="passwordConfirmation.errorMessages"
                   v-model:value="passwordConfirmation.value" />
        <SubmitButton class="mt-5 mb-4" label="パスワード変更" />
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
import UsersRepository from '@/api/UsersRepository'

export default {
  name: 'UpdatePasswordSection',
  components: {
    InputForm,
    SubmitButton,
    InfoNotification,
    ErrorNotification
  },
  data () {
    return {
      password: {
        value: '',
        hasError: false,
        errorMessages: []
      },
      passwordConfirmation: {
        value: '',
        hasError: false,
        errorMessages: []
      },
      infoMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    clear () {
      this.password.hasError = false
      this.password.errorMessages = []
      this.passwordConfirmation.hasError = false
      this.passwordConfirmation.errorMessages = []
      this.infoMessage = ''
      this.errorMessage = ''
    },
    async handleSubmit () {
      try {
        this.clear()
        const param = {
          user: {
            password: this.password.value,
            passwordConfirmation: this.passwordConfirmation.value
          }
        }
        await UsersRepository.updatePassword(this.$store.state.user.id, param)
        this.infoMessage = 'パスワードを変更しました。'
        this.password.value = ''
        this.passwordConfirmation.value = ''
      } catch (e) {
        const { status, data } = e.response
        this.password.value = ''
        this.passwordConfirmation.value = ''
        const expectedStatuses = [422]
        if (expectedStatuses.includes(status) && data.error !== undefined) {
          this.errorMessage = data.error.message
        } else if (status === 422) {
          const { password, passwordConfirmation } = data
          if (password !== undefined) {
            this.password.hasError = true
            this.password.errorMessages = password
          }
          if (passwordConfirmation !== undefined) {
            this.passwordConfirmation.hasError = true
            this.passwordConfirmation.errorMessages = passwordConfirmation
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
