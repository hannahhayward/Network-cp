<template>
  <form @submit.prevent="createPost" v-if="account">
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
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
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
          Notification.toast(error, error)
        }
      },
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>

</style>
