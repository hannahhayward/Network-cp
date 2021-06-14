<template>
  <div class="container-fluid text-light" :style="{ backgroundImage: `url(${activeProfile.coverImg})` || none}">
    <div class="row">
      <div class="col-2 mt-1 bg-dark">
        <Profile />
      </div>
      <div class="col-8 mt-5">
        <CreatePost />
        <UserPosts v-for="p in userPosts" :key="p.id" :post="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { postService } from '../services/PostService'
import { profileService } from '../services/ProfileService'
import { useRoute } from 'vue-router'
export default {
  name: 'Account',
  setup() {
    const route = useRoute()
    const state = reactive({ })
    watchEffect(async() => {
      try {
        await profileService.getProfile(route.params.id)
        await postService.getUserPosts('api/posts?creatorId=' + route.params.id)
        logger.log(route.params.id)
      } catch (error) {
        logger.log(error)
      }
    })

    return {
      state,
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile),
      userPosts: computed(() => AppState.activeUserPosts)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
.bg-img{
  background-image: url(https://images4.alphacoders.com/936/thumb-1920-936378.jpg);
  object-fit: fill;
  background-repeat: no-repeat;
}
</style>
