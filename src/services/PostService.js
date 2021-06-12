import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getPosts(url = 'api/posts', userUrl = 'api/projects?creatorId=', id) {
    // if (id === AppState.account.id) {
    //   const res = await api.get(userUrl + AppState.account.id)
    //   logger.log(res.data, 'userposts')
    // }
    const res = await api.get(url)
    AppState.posts = res.data.posts
    logger.log(AppState)
  }

  async getUserPosts(id) {
    const res = await api.get(id)
    AppState.activeUserPosts = res.data.posts
    logger.log(res.data.posts, 'user posts')
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    logger.log('new post', res.data)
  }
}

export const postService = new PostService()
