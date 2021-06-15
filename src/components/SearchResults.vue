<template>
  <div class="card my-4 ">
    <div class="card-title text-center px-4 pt-2 m-0">
      <h3> {{ post.body }} </h3>
    </div>
    <div class="card-body">
      <p class="font-weight-light">
        {{ post.createdAt.split('T')[0] }}
      </p>
      <img :src="post.imgUrl" alt="" class="w-100">
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    return {
      results: computed(() => AppState.searchResults)
    }
  }
}
</script>

<style>

</style>
