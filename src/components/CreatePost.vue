<template>
  <form @submit.prevent="createPost">
    <input type="text" class="form-control" placeholder="body" v-model="state.newPost.body">
    <input type="text" class="form-control" placeholder="image Url" v-model="state.newPost.imgUrl">
    <button class="btn btn-info btn-block">
      Create
    </button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postService } from '../services/PostService'
import Notification from '../utils/Notification'
export default {
  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state,
      async createPost() {
        try {
          await postService.createPost(state.newPost)
        } catch (error) {
          Notification.toast('please sign in or make an account')
        }
      }
    }
  }
}
</script>

<style>

</style>
