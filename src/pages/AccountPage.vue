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
                     class="form-control bg-transparent text-primary"
                     id="photo"
                     v-model="state.account.picture"
              >
            </div>
            <div class="input-group cover-img outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Cover image url</span>
              </div>
              <input type="text" placeholder="cover image url" aria-label="coverImage url" class="form-control bg-transparent text-primary" v-model="state.account.coverImg">
            </div>
            <div class="input-group name outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Name</span>
              </div>
              <input type="text" :placeholder="account.name" aria-label="account name" class="form-control bg-transparent text-primary" v-model="state.account.name">
            </div>
            <div class="input-group bio outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Bio</span>
              </div>
              <input type="text" :placeholder="account.bio || 'bio'" aria-label="bio" class="form-control bg-transparent text-primary" v-model="state.account.bio">
            </div>
            <div class="input-group github outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Github url</span>
              </div>
              <input type="text" :placeholder="account.github || 'github'" aria-label="github" class="form-control bg-transparent text-primary" v-model="state.account.github">
            </div>
            <div class="input-group linkedin outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">LinkedIn url</span>
              </div>
              <input type="text" :placeholder="account.linkedin || 'linkedin'" aria-label="linkedin" class="form-control bg-transparent text-primary" v-model="state.account.linkedin">
            </div>
            <div class="input-group resume outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Resume url</span>
              </div>
              <input type="text" :placeholder="account.resume || 'resume url'" aria-label="resume" class="form-control bg-transparent text-primary" v-model="state.account.resume">
            </div>
            <div class="input-group class outline-light my-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Class</span>
              </div>
              <input type="text" :placeholder="account.class || 'class url'" aria-label="class" class="form-control bg-transparent text-primary" v-model="state.account.class">
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
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { logger } from '../utils/Logger'
import Notification from '../utils/Notification'
export default {
  name: 'Profile',
  setup() {
    const state = reactive({ account: computed(() => AppState.account) })
    return {
      state,
      account: computed(() => AppState.account),
      activeProfile: computed(() => AppState.activeProfile),
      async editProfile(account) {
        try {
          await accountService.editProfile(state.account)
          logger.log(state.account, 'account')
        } catch (error) {
          Notification.toast(error, error)
        }
      },
      setEdit(account) {
        state.account.picture = account.picture
        state.account.coverImg = account.coverImg
        state.account.name = account.name
        state.account.bio = account.bio
        state.account.github = account.github
        state.account.linkedin = account.linkedin
        state.account.class = account.class
        state.account.id = account.id
      },
      changePicture() {
        try {
          accountService.changePicture(state.newInfo)
        } catch (error) {
          Notification.toast(error, error)
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.size{
  height: 15vh;
  width: 15vh;
}
</style>
