import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AdService {
  async getAds() {
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.ads = res.data
  }
}

export const adService = new AdService()
