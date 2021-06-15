<template>
  <div class="container-fluid">
    <div class="row bg-dark">
      <div class="col-2">
        <Ad v-for="a in ads" :key="a.title" :ad="a" />
      </div>
      <div class="col-8">
        <CreatePost v-if="user.isAuthenticated" />
        <Post v-for="p in posts" :key="p.id" :post="p" />
      </div>
      <div class="col-2">
        <Account />
      </div>
    </div>
  </div>
</template>

<script>
import { postService } from '../services/PostService'
import { adService } from '../services/AdService'
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
export default {
  name: 'Home',
  setup() {
    onMounted(() => {
      try {
        postService.getPosts()
        adService.getAds()
      } catch (error) {
        Notification.toast(error, error)
      }
    })
    return {
      ads: computed(() => AppState.ads),
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user)
    }
  }
}

</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
