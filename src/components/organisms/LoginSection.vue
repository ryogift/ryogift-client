<template>
  <div class="login-section m">
    <section class="section m-1 border-frame">
      <h1 class="title">ログイン</h1>
      <form @submit.prevent="handleSubmit">
        <EmailInput class="field" v-model:value="email" />
        <PasswordInput class="field" v-model:value="password" />
        <SubmitButton class="mt-5 mb-4" label="ログイン" />
      </form>
      <Link class="password-reset" label="パスワードを忘れた場合" @link="passwordRestLink" />
      <ErrorNotification class="mt-2" v-if="errorMessage" :message="errorMessage" />
    </section>
  </div>
</template>

<script>
import EmailInput from '@/components/atoms/Input/EmailInput.vue'
import PasswordInput from '@/components/atoms/Input/PasswordInput.vue'
import SubmitButton from '@/components/molecules/SubmitButton.vue'
import ErrorNotification from '@/components/atoms/Notification/ErrorNotification.vue'
import { ReposiotryFactory } from './../../api/RepositoryFactory'
import Link from '@/components/atoms/Link.vue'

const AuthRepository = ReposiotryFactory.get('auth')

export default {
  name: 'LoginSection',
  components: {
    EmailInput,
    PasswordInput,
    SubmitButton,
    ErrorNotification,
    Link
  },
  data () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit () {
      try {
        const param = { email: this.email, password: this.password }
        const { data } = await AuthRepository.login(param)

        this.$store.dispatch('login', { name: data.name, admin: data.admin })
        this.$router.push('/')
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
    },
    passwordRestLink () {
      this.$router.push('/passwordresets/new')
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
.password-reset {
  color: black;
  text-decoration: underline;
}
</style>
