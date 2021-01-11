<template>
  <div class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand h-60">
        <div class="navbar-item">
          <LogoHomeLink />
        </div>

        <a role="button" class="navbar-burger"
           aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <template v-if="isAdmin">
            <Link class="navbar-item" label="ユーザー 一覧" @link="usersLink" />
          </template>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <template v-if="isCurrentUser">
              <Link label="ログアウト" @link="logout" />
            </template>
            <template v-else>
              <LoginLinkButton class="mr-2" />
              <SignupLinkButton class="mr-2" />
            </template>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LogoHomeLink from '@/components/molecules/LogoHomeLink.vue'
import LoginLinkButton from '@/components/molecules/LoginLinkButton.vue'
import SignupLinkButton from '@/components/molecules/SignupLinkButton.vue'
import Link from '@/components/atoms/Link.vue'
import { ReposiotryFactory } from './../../api/RepositoryFactory'

const AuthRepository = ReposiotryFactory.get('auth')

export default {
  name: 'Header',
  components: {
    LogoHomeLink,
    LoginLinkButton,
    SignupLinkButton,
    Link
  },
  computed: {
    isCurrentUser () {
      return this.$store.state.user.name !== ''
    },
    isAdmin () {
      return this.$store.state.user.admin
    }
  },
  methods: {
    async logout () {
      this.isLoading = true
      await AuthRepository.logout()
      this.$store.dispatch('logout')
      this.isLoading = false
      this.$router.push('/')
    },
    usersLink () {
      this.$router.push('/users')
    }
  }
}
</script>

<style scoped>
.h-60 {
  height: 60px;
}
</style>
