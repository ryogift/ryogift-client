<template>
  <div class="home">
    <div class="container is-max-desktop" v-if="isCurrentUser">
      <div class="m-5">
        <div class="hero mt-5 mb-5 post" v-for="post in posts" :key="post.id">
          <div class="m-5">
            <div class="post-header">
              <div class="user-name">{{ post.userName }}</div>
              <div class="display-updated-at">{{ post.displayUpdatedAt }}</div>
            </div>
            <div class="post-content mt-3 mb-3">{{ post.content }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container is-max-desktop">
      <section class="hero center">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">ポートフォリオ</h1>
            <p class="left">ポートフォリオとして、ユーザー登録、認証、投稿機能をSPA(Single Page Application)で開発しました。</p>
            <p class="left">以下は今回、開発したアーキテクチャの構成です。</p>
            <img src="@/assets/architecture.png" width="600" />
            <p class="left">素早いリリースを目的として普段、業務で利用している開発言語やフレームワークを使って開発しています。</p>
            <p class="left">フロントエンドの技術のみ、最近リリースされたVue.js 3を利用しています。</p>

            <h1 class="title mt-5">機能イメージ</h1>
            <p>ホーム(全ユーザーの投稿一覧)</p>
            <img class="mb-5" src="@/assets/home.png" width="600" border="1" />

            <p>投稿一覧(ユーザーごとの投稿一覧)</p>
            <img src="@/assets/posts.png" width="600" border="1" />
            <p class="left mt-5">ユーザー登録をしなくても、ご確認いただけるようにユーザーを用意しました。</p>
            <p class="left mb-3">動作確認にご活用ください。</p>

            <table class="table is-bordered inline-block">
              <thead>
                <tr>
                  <th>ユーザー</th>
                  <th>email</th>
                  <th>password</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>試用ユーザー1</td>
                  <td>trial1@ryo.gift</td>
                  <td>trial1trial1</td>
                </tr>
                <tr>
                  <td>試用ユーザー2</td>
                  <td>trial2@ryo.gift</td>
                  <td>trial2trial2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PostsRepository from '@/api/PostsRepository'

export default {
  name: 'Home',
  data () {
    return {
      posts: []
    }
  },
  created () {
    if (this.isCurrentUser) {
      this.fetch()
    }
  },
  mounted () {
    document.title = 'ホーム | Ryo.gift'
  },
  computed: {
    isCurrentUser () {
      return this.$store.getters.isCurrentUser
    }
  },
  methods: {
    async fetch () {
      const { data } = await PostsRepository.index()
      this.posts = data
    }
  }
}
</script>

<style scoped>
.post {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
}
.post-header {
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 0.5rem;
}
.user-name {
  font-weight: bold;
}
.display-updated-at {
  font-size: 15px;
}
.post-content {
  white-space: pre-wrap;
}
.center {
  text-align: center;
}
.left {
  text-align: left;
  padding-left: 64px;
}
.inline-block {
  display: inline-block;
}
</style>
