import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (error) {
      Notification.toast(error, error)
    }
  }

  async editProfile(account) {
    logger.log(account, 'reached the service')
    const res = await api.put('account/', account)
    logger.log(res, 'did they go through?')
    // let formData = {
    //  picture = form.photo.value,
    //  coverImg = form.coverImg.value,
    //  name = form.name.val
    // }
  }
}

export const accountService = new AccountService()
