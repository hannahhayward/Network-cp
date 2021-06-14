<template>
  <div class="card my-4 ">
    <div class="card-title text-center px-4 pt-2 m-0">
      <h3> {{ post.body }} </h3>
    </div>
    <div class="card-body">
      <p class="font-weight-light">
        {{ post.createdAt }}
      </p>
      <img :src="post.imgUrl" alt="" class="w-100">
    </div>
    <div class="card-footer">
      <div>
        <router-link :to="{ name: 'Profile', params:{id: post.creatorId} }" :key="post.creatorId">
          <img :src="posts.creator.picture" alt="" class="p-pic rounded-pill mx-1" @click="getProfile(post.creator.id)">
        </router-link>
        <!-- {{ post.creator.name }} -->
        <!-- <i class="fas fa-thumbs-up" @click="likePost(post)"> {{ post.likes.length }} </i> -->
        <!-- <i class="fas fa-thumbs-up" @click="likePost(post)"> {{ post.likeIds.length }} </i> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      post: computed(() => AppState.searchResults)
    }
  }
}
</script>

<style>

</style>
