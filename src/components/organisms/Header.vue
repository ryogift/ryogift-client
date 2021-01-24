<template>
  <div class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation" v-show="isHeader">
      <div class="navbar-brand h-60">
        <div class="navbar-item">
          <Logo @click="homeLink" />
        </div>

        <template v-if="isCurrentUser">
          <a role="button" class="navbar-burger"
            aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
            @click="toggleNavbarBurger"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </template>
        <template v-else>
          <a role="button" class="navbar-burger w-auto" aria-label="menu" aria-expanded="false">
            <div class="navbar-item">
              <LoginLinkButton class="mr-2" @click="loginLink" />
              <SignupLinkButton class="mr-2" @click="signupLink" />
            </div>
          </a>
        </template>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isNavbarBurger }">
        <div class="navbar-start">
          <template v-if="isCurrentUser">
            <Link class="navbar-item nav-link home-link" label="ホーム" @click="homeLink" />
            <Link class="navbar-item nav-link posts-link" label="投稿一覧" @click="userPostsLink" />
          </template>
          <template v-if="isAdmin">
            <Link class="navbar-item nav-link users-link" label="ユーザー 一覧" @click="usersLink" />
          </template>
        </div>

        <template v-if="isCurrentUser">
          <div class="navbar-end">
            <div class="navbar-item has-dropdown"
                :class="{ 'is-active': isRightMenu }">
              <a class="navbar-link nav-link current-user" @click="toggleRightMenu">
                {{ currentUserName }}
              </a>
              <div class="navbar-dropdown is-right right-dropdown" v-if="isRightMenu">
                <Link class="navbar-item nav-link password-link" label="パスワードの変更" @click="updatePasswordLink" />
                <hr class="navbar-divider">
                <Link class="navbar-item nav-link logout-link" label="ログアウト" @click="logout" />
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="navbar-end">
            <div class="navbar-item">
              <LoginLinkButton class="mr-2" @click="loginLink" />
              <SignupLinkButton class="mr-2" @click="signupLink" />
            </div>
          </div>
        </template>
      </div>
    </nav>
    <div class="header-background" @click="closeMenu" v-if="isRightMenu || isNavbarBurger"></div>
  </div>
</template>

<script>
import Logo from '@/components/atoms/Logo.vue'
import LoginLinkButton from '@/components/molecules/LoginLinkButton.vue'
import SignupLinkButton from '@/components/molecules/SignupLinkButton.vue'
import Link from '@/components/atoms/Link.vue'
import AuthRepository from '@/api/AuthRepository'

export default {
  name: 'Header',
  components: {
    Logo,
    LoginLinkButton,
    SignupLinkButton,
    Link
  },
  data () {
    return {
      isRightMenu: false,
      isNavbarBurger: false,
      isHeader: false
    }
  },
  created () {
    if (document.cookie !== '') {
      this.currentUser()
    } else {
      this.isHeader = true
    }
  },
  computed: {
    isCurrentUser () {
      return this.$store.getters.isCurrentUser
    },
    isAdmin () {
      return this.$store.state.user.admin
    },
    currentUserName () {
      return this.$store.state.user.name
    }
  },
  methods: {
    async currentUser () {
      this.isHeader = false
      const { data } = await AuthRepository.clientUser()
      this.$store.dispatch('login', { id: data.id, name: data.name, admin: data.admin })
      this.isHeader = true
    },
    async logout () {
      this.closeMenu()
      await AuthRepository.logout()
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    usersLink () {
      this.closeMenu()
      this.$router.push('/users')
    },
    homeLink () {
      this.closeMenu()
      this.$router.push('/')
    },
    userPostsLink () {
      this.closeMenu()
      this.$router.push('/userposts')
    },
    updatePasswordLink () {
      this.closeMenu()
      this.$router.push('/updatepassword')
    },
    loginLink () {
      this.$router.push('/login')
    },
    signupLink () {
      this.$router.push('/signup')
    },
    toggleRightMenu () {
      this.isRightMenu = !this.isRightMenu
    },
    toggleNavbarBurger () {
      this.isNavbarBurger = !this.isNavbarBurger
    },
    closeMenu () {
      this.isRightMenu = false
      this.isNavbarBurger = false
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
  z-index: 11;
}
.w-auto {
  width: auto;
}
.navbar-burger:hover {
  background-color: white !important;
}
.navbar {
  z-index: 11;
}
.header-background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgb(156 156 156 / 29%);
}
</style>
