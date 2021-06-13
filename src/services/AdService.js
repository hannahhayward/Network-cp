import { AppState } from '../AppState'
import { api } from './AxiosService'

class AdService {
  async getAds() {
    const res = await api.get('api/ads')
    AppState.ads = res.data
  }
}

export const adService = new AdService()
