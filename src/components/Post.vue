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
    <div class="card-footer">
      <div>
        <router-link :to="{ name: 'Profile', params:{id: post.creator.id} }" :key="post.creator.id">
          <img :src="post.creator.picture" alt="" class="p-pic rounded-pill mx-1">
        </router-link>
        {{ post.creator.name }}
        <i class="fas fa-thumbs-up" @click="likePost(post)"> {{ post.likes.length }} </i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { postService } from '../services/PostService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { profileService } from '../services/ProfileService'
import Notification from '../utils/Notification'
export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      posts: computed(() => AppState.posts),
      getProfile(id) {
        try {
          profileService.getProfile()
        } catch (error) {
          Notification.toast(error, error)
        }
      }
    })
    onMounted(() => {
      try {
        postService.getPosts()
      } catch (error) {
        logger.log(error)
        Notification.toast(error, error)
      }
    })
    return {
      posts: computed(() => AppState.posts),
      likePost(post) {
        // post.likes.length += 1
        logger.log(post, 'post')
        try {
          postService.likePost(post)
        } catch (error) {
          Notification.toast(error, error)
        }
      },
      state
    }
  }

}
</script>

<style lang="scss" scoped>
.p-pic{
  height: 5vh;
  width: 5vh;
}
.card{
  background-color: #f9f9f9;
}
</style>
