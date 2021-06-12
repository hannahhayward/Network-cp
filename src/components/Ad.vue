<template>
  <div class="card my-5">
    <img :src="ad.tall" alt="" class="w-100">
  </div>
</template>

<script>
export default {
  props: { ad: { type: Object, required: true } },
  setup(props) {
  }

}
</script>

<style>

</style>
