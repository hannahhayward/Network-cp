<template>
  <div class="card my-4 ">
    <div class="card-title text-center px-4 pt-2 m-0">
      <h3> {{ post.body }} </h3>
    </div>
    <div class="card-body">
      <img :src="post.imgUrl" alt="" class="w-100">
    </div>
    <div class="card-footer">
      <div>
        <img :src="post.creator.picture" alt="" class="p-pic rounded-pill mx-1">
        {{ post.creator.name }}
        <i class="fas fa-thumbs-up"> {{ post.creator.likes }} </i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
// import { AppState } from '../AppState'
import { postService } from '../services/PostService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
// import { onMounted } from '@vue/runtime-core'
// import { postService } from '../services/PostService'
export default {
  props: { post: { type: Object, required: true } },
  setup(props) {
    onMounted(() => {
      try {
        postService.getPosts()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      posts: computed(() => AppState.posts)
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
