<template>
  <div class="home">
    <div class="container is-max-desktop">
      <Loading class="m-5" v-if="isLoading" />
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
  </div>
</template>

<script>
import Loading from '@/components/atoms/Loading.vue'
import RepositoryFactory from '@/api/RepositoryFactory'

const PostsRepository = RepositoryFactory.get('posts')

export default {
  name: 'Home',
  components: {
    Loading
  },
  data () {
    return {
      isLoading: true,
      posts: [],
      id: 0,
      modal: false
    }
  },
  created () {
    this.fetch()
  },
  mounted () {
    document.title = 'ホーム | Ryo.gift'
  },
  methods: {
    async fetch () {
      this.isLoading = true
      const { data } = await PostsRepository.index()
      this.posts = data
      this.isLoading = false
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
</style>
