<template>
  <div class="card text-light bg-dark">
    <div class="card-header text-center">
      <img :src="account.picture" alt="" class="rounded-pill size">
      <h6 class="mt-3">
        {{ account.name }}
      </h6>
      <div class="card-body">
        <p>{{ account.bio }}</p>
      </div>
      <div class="card-footer" v-if="account">
        <router-link :to="{ name: 'Account', params:{id: account.id} }" :key="account.id">
          <button class="btn-block btn btn-info">
            Edit your account
          </button>
          <button class="btn-block btn btn-danger">
            Log out
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    }
  }

}
</script>

<style scoped>
.size{
  height: 20vh;
  width: 10vw;
}
</style>
