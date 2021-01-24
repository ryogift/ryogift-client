<template>
  <div class="user-posts">
    <div class="container is-max-desktop" v-if="isCurrentUser">
      <div class="m-5">
        <div class="text-right mt-5">
          <CreateButton @click="openNewModal" />
        </div>
        <div class="hero mt-5 mb-5 post" v-for="(post, index) in posts" :key="post.id">
          <div class="m-5">
            <div class="post-header">
              <span class="display-updated-at">{{ post.displayUpdatedAt }}</span>
              <EllipsisDropDown class="right"
                                @toggle="toggleDropDown(index)"
                                @close="closeDropDown(index)"
                                @modal="openEditModal(post.id)"
                                @remove="openRemoveModal(post.id)"
                                :isDropDown="post.isDropDown" />
            </div>
            <div class="post-content mt-3 mb-3">{{ post.content }}</div>
          </div>
        </div>
        <PostModal v-if="postModal"
                   :title="modalTitle" :type="type" :id="id"
                   @close="closePostModal" />
        <RemoveModal v-if="removeModal" @close="closeRemoveModal" @remove="handleRemove" />
      </div>
    </div>
    <div class="dropdown-background" @click="closeAllDropDown" v-if="isDropDown" />
  </div>
</template>

<script>
import CreateButton from '@/components/atoms/Button/CreateButton.vue'
import EllipsisDropDown from '@/components/molecules/EllipsisDropDown.vue'
import PostModal from '@/components/organisms/PostModal.vue'
import RemoveModal from '@/components/organisms/RemoveModal.vue'
import RepositoryFactory from '@/api/RepositoryFactory'

const UserPostsRepository = RepositoryFactory.get('userPosts')

export default {
  name: 'UserPosts',
  components: {
    CreateButton,
    EllipsisDropDown,
    PostModal,
    RemoveModal
  },
  data () {
    return {
      posts: [],
      postModal: false,
      removeModal: false,
      modalTitle: '',
      type: '',
      id: 0,
      isDropDown: false,
      indexDropDown: 0
    }
  },
  created () {
    this.fetch()
  },
  mounted () {
    document.title = '投稿一覧 | Ryo.gift'
  },
  computed: {
    isCurrentUser () {
      return this.$store.getters.isCurrentUser
    }
  },
  methods: {
    async fetch () {
      const { data } = await UserPostsRepository.index()
      data.forEach(item => { item.isDropDown = false })
      this.posts = data
    },
    async handleRemove () {
      await UserPostsRepository.destroy(this.id)
      this.closeRemoveModal()
      this.fetch()
    },
    openNewModal () {
      this.modalTitle = '投稿を作成'
      this.type = 'create'
      this.postModal = true
    },
    openEditModal (id) {
      this.modalTitle = '投稿を編集'
      this.type = 'update'
      this.id = id
      this.postModal = true
    },
    openRemoveModal (id) {
      this.id = id
      this.removeModal = true
    },
    closePostModal () {
      this.fetch()
      this.postModal = false
      this.isDropDown = false
    },
    closeRemoveModal () {
      this.removeModal = false
      this.isDropDown = false
    },
    toggleDropDown (index) {
      this.isDropDown = !this.isDropDown
      this.indexDropDown = index
      this.posts[index].isDropDown = !this.posts[index].isDropDown
    },
    closeDropDown (index) {
      this.posts[index].isDropDown = false
    },
    closeAllDropDown () {
      this.isDropDown = false
      this.posts[this.indexDropDown].isDropDown = false
    }
  }
}
</script>

<style scoped>
.text-right {
  text-align: right;
}
.right {
  float: right;
}
.post {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
}
.post-header {
  height: 40px;
  border-bottom: 1px solid #d6d6d6;
}
.display-updated-at {
  font-size: 15px;
  vertical-align: bottom;
}
.post-content {
  white-space: pre-wrap;
}
.dropdown-background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  background-color: rgb(156 156 156 / 29%);
}
</style>
