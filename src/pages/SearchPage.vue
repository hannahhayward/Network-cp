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
          <SearchResults v-for="s in searchResults" :key="s" :post="s" />
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
import { logger } from '../utils/Logger'
import { adService } from '../services/AdService'
export default {
  name: 'SearchPage',
  setup() {
    onMounted(() => {
      try {
        adService.getAds()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      searchResults: computed(() => AppState.searchResults),
      ads: computed(() => AppState.ads)
    }
  }
}
</script>
