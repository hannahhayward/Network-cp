<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        <Ad v-for="a in ads" :key="a.title" :ad="a" />
      </div>
      <div class="col-8">
        <div>
          <Search />
        </div>
        <div>
          <SearchResults v-for="s in results" :key="s.id" :post="s" />
          <!-- <div v-for="r in results" :key="r">
            <div class="bg-light text-dark">
              <h2> {{ results.body }} </h2>
            </div>
          </div> -->
        </div>
        <!-- <div class="col-2">
          <Ad v-for="a in ads" :key="a.title" :ad="a" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { adService } from '../services/AdService'
import Notification from '../utils/Notification'
export default {
  name: 'SearchPage',
  setup() {
    onMounted(() => {
      try {
        adService.getAds()
      } catch (error) {
        Notification.toast(error, error)
      }
    })
    return {
      results: computed(() => AppState.searchResults),
      ads: computed(() => AppState.ads)
    }
  }
}
</script>
