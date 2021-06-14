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
      <!-- <div class="card text-light bg-dark" v-if="!user.isAuthenicated">
        <h3>sign in or create an account now!</h3>
        <button class="btn btn-info" @click="login">
          Login
        </button>
      </div> -->
      <div class="card-footer">
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
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      }
    }
  }

}
</script>

<style>

</style>
