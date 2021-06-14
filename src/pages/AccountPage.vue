<template>
  <div class="container-fluid" id="bg-image" :style="{ backgroundImage: `url(${account.coverImg})`}">
    <div class="row">
      <div class="col-10 bg-dark py-3">
        <div class="info">
          <img :src="account.picture" alt="" class="rounded-pill size">
          <form id="account-form" @submit="editProfile(account)">
            <div class="input-group account-pic outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Picture url</span>
              </div>
              <input type="text"
                     placeholder="photo url"
                     aria-label="photo url"
                     class="form-control bg-transparent"
                     id="photo"
                     v-model="state.edits.picture"
              >
            <!-- <div class="input-group-append">
              <button class="btn text-light btn-outline-light" type="button" id="button-addon2">
                submit
              </button>
            </div> -->
            </div>
            <div class="input-group cover-img outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Cover image url</span>
              </div>
              <input type="text" placeholder="cover image url" aria-label="coverImage url" class="form-control bg-transparent" v-model="state.edits.coverImg">
            <!-- <div class="input-group-append">
              <button class="btn text-light btn-outline-light" type="button" id="button-addon2">
                submit
              </button>
            </div> -->
            </div>
            <div class="input-group name outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Name</span>
              </div>
              <input type="text" :placeholder="account.name" aria-label="account name" class="form-control bg-transparent" v-model="state.edits.name">
            <!-- <div class="input-group-append">
              <button class="btn text-light btn-outline-light" type="button" id="button-addon2">
                submit
              </button>
            </div> -->
            </div>
            <div class="input-group bio outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Bio</span>
              </div>
              <input type="text" :placeholder="account.bio || 'bio'" aria-label="bio" class="form-control bg-transparent" v-model="state.edits.bio">
            <!-- <div class="input-group-append">
              <button class="btn text-light btn-outline-light" type="button" id="button-addon2">
                submit
              </button>
            </div> -->
            </div>
            <div class="input-group github outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Github url</span>
              </div>
              <input type="text" :placeholder="account.github || 'github'" aria-label="github" class="form-control bg-transparent" v-model="state.edits.github">
            <!-- <div class="input-group-append">
              <button class="btn text-light btn-outline-light" type="button" id="button-addon2">
                submit
              </button>
            </div> -->
            </div>
            <div class="input-group linkedin outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">LinkedIn url</span>
              </div>
              <input type="text" :placeholder="account.linkedin || 'linkedin'" aria-label="linkedin" class="form-control bg-transparent" v-model="state.edits.linkedin">
            <!-- <div class="input-group-append">
              <button class="btn text-light btn-outline-light" type="button" id="button-addon2">
                submit
              </button>
            </div> -->
            </div>
            <div class="input-group resume outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Resume url</span>
              </div>
              <input type="text" :placeholder="account.resume || 'resume url'" aria-label="resume" class="form-control bg-transparent" v-model="state.edits.resume">
            <!-- <div class="input-group-append">
              <button class="btn text-light btn-outline-light" type="button" id="button-addon2">
                submit
              </button>
            </div> -->
            </div>
            <div class="input-group class outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Class</span>
              </div>
              <input type="text" :placeholder="account.class || 'class url'" aria-label="class" class="form-control bg-transparent" v-model="state.edits.class">
            <!-- <div class="input-group-append">
              <button class="btn text-light btn-outline-light" type="button" id="button-addon2">
                submit
              </button>
            </div> -->
            </div>
            <input type="text" class="d-none">
            <div class="buttons">
              <button class="btn-block btn btn-success" type="submit">
                Exit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
// import { useRoute } from 'vue-router'
// import { logger } from '../utils/Logger'
// import { profileService } from '../services/ProfileService'
// import { postService } from '../services/PostService'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { logger } from '../utils/Logger'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({
      // newInfo: {}
      // account: computed(() => AppState.account),
      edits: {
        picture: '',
        coverImg: '',
        name: '',
        bio: '',
        github: '',
        linkedin: '',
        resume: '',
        class: '',
        id: ''
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile),
      setEdit(account) {
        state.edits.picture = account.picture
        state.edits.coverImg = account.coverImg
        state.edits.name = account.name
        state.edits.bio = account.bio
        state.edits.github = account.github
        state.edits.linkedin = account.linkedin
        state.edits.class = account.class
        state.edits.id = account.id
        // logger.log(state.edits, 'setedit')
        // this.editProfile()
      },
      async editProfile(edits) {
        accountService.editProfile(state.edits)
        logger.log(state.edits, 'edits')
      },
      changePicture() {
        accountService.changePicture(state.newInfo)
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
