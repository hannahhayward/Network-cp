<template>
  <div>test test</div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
// import { useRoute } from 'vue-router'
// import { logger } from '../utils/Logger'
// import { profileService } from '../services/ProfileService'
// import { postService } from '../services/PostService'
import { AppState } from '../AppState'
export default {
  name: 'Profile',
  setup() {
    // const route = useRoute()
    const state = reactive({ })
    return {
      state,
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile)
    }
  }

}
</script>

<style>

</style>
