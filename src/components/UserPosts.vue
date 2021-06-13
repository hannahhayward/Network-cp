<template>
  <div class="col-4">
    <div class="card my-4 bg-dark text-light my-2">
      <div class="card-title text-center m-0">
        <h3 class="m-0">
          {{ post.body }}
        </h3>
      </div>
      <div class="card-body p-1">
        <img :src="post.imgUrl" alt="" class="w-100 h-100">
      </div>
      <div class="card-footer">
        <div>
          <i class="fas fa-thumbs-up"> {{ post.likes.length }} </i>
          <button class="btn btn-danger" @click="deletePost(post)">
            delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'
import { logger } from '../utils/Logger'
// import { logger } from '../utils/Logger'
// import { postService } from '../services/PostService'
// import { logger } from '../utils/Logger'
export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      posts: computed(() => AppState.activeUserPosts._id)
    })

    return {
      state,
      // likes(post) {
      //   postService.likePost(post)
      // },
      deletePost(post) {
        logger.log(post, 'post id')
        postService.deletePost(post)
      },
      userPosts: computed(() => AppState.activeUserPosts)
    }
  }
}
</script>
<style lang="scss" scoped>

.card{
  height: 25vh;
  width: 25vh;
}
</style>
