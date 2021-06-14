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
export default {
  setup() {
    const state = reactive({
      query: ''
    })
    return {
      state,
      findPosts() {
        AppState.currentPage = 1
        AppState.currentQuery = state.query
        postService.findPosts()
        state.query = ''
      }
    }
  }
}
</script>

<style>

</style>
