<template>
  <form @submit.prevent="findPosts">
    <div class="search">
      <input type="text" class="form-control" placeholder="search posts" v-model="state.query">
      <button class="btn btn-primary" type="submit" :disabled="!state.query">
        Search
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
import Notification from '../utils/Notification'
export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      query: ''
    })
    return {
      state,
      findPosts() {
        AppState.currentQuery = state.query
        try {
          postService.findPosts()
          state.query = ''
        } catch (error) {
          Notification.toast(error, error)
        }
      }
    }
  }
}
</script>

<style>

</style>
