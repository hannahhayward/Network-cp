<template>
  <div class="card text-light">
    <div class="card-header text-center">
      <img :src="activeProfile.picture" alt="" class="rounded-pill size">
      <h6 class="mt-3">
        {{ activeProfile.name }}
      </h6>
      <div class="card-body">
        <p>{{ activeProfile.bio }}</p>
      </div>
      <div class="card-footer" v-if="activeProfile.id === account.id">
        <router-link :to="{ name: 'Account', params:{id: account.id} }" :key="account.id">
          <button class="btn-block btn btn-info">
            Edit your account
          </button>
        </router-link>
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

      activeProfile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style lang="scss" scoped>
.size{
width: 12vw;
height: 12vh;
}
.card{
  background-color: #202122;
}
</style>
