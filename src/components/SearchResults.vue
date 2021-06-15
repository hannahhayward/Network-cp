<template>
  <div>
    <div class="bg-light text-dark">
      <h2> {{ post.body }} </h2>
    </div>
  </div>
  <!-- <div class="card my-4 ">
    <div class="card-title text-center px-4 pt-2 m-0">
      <h3> {{ post.post.body }} </h3>
    </div>
    <div class="card-body">
      <p class="font-weight-light">
        {{ post.post.createdAt }}
      </p>
      <img :src="post.post.imgUrl" alt="" class="w-100">
    </div>
    <div class="card-footer">
      <div>
        <router-link :to="{ name: 'Profile', params:{id: post.post.creatorId} }" :key="post.post.creatorId">
          <img :src="post.post.picture" alt="" class="p-pic rounded-pill mx-1" @click="getProfile(post.post.creator.id)">
        </router-link>
         {{ post.creator.name }} -->
  <!-- <i class="fas fa-thumbs-up" @click="likePost(post)"> {{ post.likes.length }} </i> -->
  <!-- <i class="fas fa-thumbs-up" @click="likePost(post)"> {{ post.likeIds.length }} </i> -->
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
