<template>
  <!-- <div class=" card my-5">
    <div class="card-header">
      <h3>Create an Account for Free! </h3>
    </div>
    <div class="card-body">
      <button class="btn btn-success">
        Create Account
      </button>
    </div>
  </div> -->
  <div class="card text-light">
    <div class="card-header text-center">
      <img src="https://i.pinimg.com/originals/bb/a2/b5/bba2b59ada9b0880079ca964eda95085.jpg" alt="" class="rounded-pill size">
      <h6 class="mt-3">
        {{ account.name }}
      </h6>
      <div class="card-body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quidem fuga mollitia modi quod animi debitis iste nemo, nisi ab vitae quasi velit libero repellat dicta quo voluptatum fugiat sunt?</p>
      </div>
      <div class="card-footer">
        <button class="btn-block btn btn-danger">
          Log out
        </button>
        <button class="btn-block btn btn-info">
          Edit your account
        </button>
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
