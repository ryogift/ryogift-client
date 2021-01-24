<template>
  <div class="users-table">
    <table class="table is-bordered is-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>名前</th>
          <th>メールアドレス</th>
          <th>状態</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.displayState }}</td>
          <td><EditButton @click="edit(user.id)" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EditButton from '@/components/atoms/Button/EditButton.vue'

export default {
  name: 'UsersTable',
  components: {
    EditButton
  },
  props: {
    users: Object
  },
  methods: {
    edit (id) {
      this.$emit('edit', id)
    }
  }
}
</script>
