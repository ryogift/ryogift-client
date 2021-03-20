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
            <div class="left flex description">
              <p>RyoGIFTはプロダクト開発の学習用に構築しています。プロダクトの試作品として運用しており、機能変更が度々発生します。</p>
            </div>
            <div class="space">
              <h5 class="subtitle m-5">機能イメージ</h5>
              <p>ホーム(全ユーザーの投稿一覧)</p>
              <img class="mb-5" src="@/assets/home.png" width="500" border="1" />

              <p>投稿一覧(ユーザーごとの投稿一覧)</p>
              <img src="@/assets/posts.png" width="500" border="1" />
            </div>
            <div class="space">
              <a class="link" href="https://blog.ryo.gift" target="_blank">開発者ブログ</a>
            </div>
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
    document.title = 'RyoGIFT | Product prototype'
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
}
.inline-block {
  display: inline-block;
}
.description {
  max-width: 400px;
  margin: auto;
  text-indent: 1em;
  line-height: 1.8;
}
.space {
  margin-top: 50px;
}
.link {
  text-decoration: underline;
  color: #008eb4;
}
</style>
