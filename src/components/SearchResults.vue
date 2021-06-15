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
    <!-- <div class="card-footer">
      <div>
        <router-link :to="{ name: 'Profile', params:{id: post.creatorId} }" :key="post.creatorId">
          <img :src="post.picture" alt="" class="p-pic rounded-pill mx-1">
        </router-link>
        {{ post.creator.name }}
        <i class="fas fa-thumbs-up" @click="likePost(post)"> {{ post.likes.length }} </i>
      </div>
    </div> -->
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
