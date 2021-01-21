<template>
  <div class="post-modal">
    <div class="modal show pr-5">
      <div class="modal-background" @click="close($event)"></div>
      <form @submit.prevent="handleSubmit">
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title mb-0">{{ title }}</p>
            <button class="delete" aria-label="close" @click="close($event)"></button>
          </header>
          <section class="modal-card-body">
            <div class="columns">
              <div class="column">
                <TextareaForm class="content-form"
                          :hasError="content.hasError" :errorMessages="content.errorMessages"
                          v-model:value="content.value" />
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <SubmitButton class="" label="投稿" />
          </footer>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import TextareaForm from '@/components/molecules/TextareaForm.vue'
import SubmitButton from '@/components/molecules/SubmitButton.vue'
import RepositoryFactory from '@/api/RepositoryFactory'

const UserPostsRepository = RepositoryFactory.get('userPosts')

export default {
  name: 'PostModal',
  components: {
    TextareaForm,
    SubmitButton
  },
  props: {
    type: String,
    title: String,
    id: Number
  },
  data () {
    return {
      content: {
        value: '',
        hasError: false,
        errorMessages: []
      },
      errorMessage: ''
    }
  },
  created () {
    if (this.type === 'update') {
      this.fetch()
    }
  },
  methods: {
    close (event) {
      if (event) {
        event.preventDefault()
      }
      this.$emit('close')
    },
    async fetch () {
      const { data } = await UserPostsRepository.show(this.id)
      this.content.value = data.content
    },
    async handleSubmit () {
      try {
        const param = {
          post: {
            content: this.content.value
          }
        }
        if (this.type === 'create') {
          await UserPostsRepository.create(param)
        } else {
          await UserPostsRepository.update(this.id, param)
        }
        this.close()
      } catch (e) {
        const { status, data } = e.response
        const expectedStatuses = [401, 403, 423]
        if (expectedStatuses.includes(status) && data.error !== undefined) {
          this.errorMessage = data.error.message
        } else if (status === 422) {
          const { content } = data
          if (content !== undefined) {
            this.content.hasError = true
            this.content.errorMessages = content
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
.show {
  display: block;
  text-align: left;
}
.cancel {
  margin-right: 8px;
}
.modal-card {
  margin-top: 80px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  border-radius: 4px;
  border: 1px solid #dbdbdb;
}
.modal-background {
  background-color: rgb(156 156 156 / 29%)
}
</style>
