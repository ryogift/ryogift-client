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
            <Link class="navbar-item nav-link" label="ユーザー 一覧" @click="usersLink" />
          </template>
        </div>

        <div class="navbar-end" v-if="isNavEnd">
          <div class="navbar-item has-dropdown" v-if="isCurrentUser"
               :class="{ 'is-active': isRightMenu }">
            <a class="navbar-link nav-link" @click="openRightMenu">
              {{ currentUserName }}
            </a>
            <div class="navbar-dropdown is-right right-dropdown" v-if="isRightMenu">
              <Link class="navbar-item nav-link" label="パスワードの変更" @click="updatePasswordLink" />
              <hr class="navbar-divider">
              <Link class="navbar-item nav-link" label="ログアウト" @click="logout" />
            </div>
          </div>
          <div class="navbar-item" v-else>
            <LoginLinkButton class="mr-2" />
            <SignupLinkButton class="mr-2" />
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
  data () {
    return {
      isRightMenu: false,
      isNavEnd: false
    }
  },
  created () {
    if (document.cookie !== '') {
      this.currentUser()
    } else {
      this.isNavEnd = true
    }
  },
  computed: {
    isCurrentUser () {
      return this.$store.state.user.name !== ''
    },
    isAdmin () {
      return this.$store.state.user.admin
    },
    currentUserName () {
      return this.$store.state.user.name
    }
  },
  methods: {
    async logout () {
      this.isRightMenu = false
      await AuthRepository.logout()
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    usersLink () {
      this.$router.push('/users')
    },
    updatePasswordLink () {
      this.isRightMenu = false
      this.$router.push('/updatepassword')
    },
    openRightMenu () {
      this.isRightMenu = !this.isRightMenu
    },
    async currentUser () {
      this.isNavEnd = false
      const { data } = await AuthRepository.clientUser()
      this.$store.dispatch('login', { id: data.id, name: data.name, admin: data.admin })
      this.isNavEnd = true
    }
  }
}
</script>

<style scoped>
.h-60 {
  height: 60px;
}
.nav-link {
  color:#4a4a4a;
  background-color: white !important;
  user-select: none;
}
.nav-link:hover {
  color:#4a4a4a;
  background-color: white !important;
  user-select: none;
}
.right-dropdown {
  border-top: none;
  box-shadow: 0px 2px 8px 0px rgba(10, 10, 10, 0.1);
}
</style>
