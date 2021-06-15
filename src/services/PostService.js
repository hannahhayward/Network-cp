// import axios from 'axios'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getPosts(url = 'api/posts') {
    const res = await api.get(url)
    AppState.posts = res.data.posts
  }

  async getUserPosts(id) {
    const res = await api.get(id)
    AppState.activeUserPosts = res.data.posts
  }

  async likePost(post) {
    logger.log(post, 'post in service')
    const res = await api.post(`api/posts/${post.id}/like`)
    logger.log(res, 'did it like')
    AppState.posts = res.data
  }

  async deletePost(post) {
    await api.delete('api/posts/' + post._id)
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    AppState.posts = res.data
  }

  async findPosts() {
    const res = await api.get(`api/posts?query=${AppState.currentQuery}`)
    // AppState.posts = res.data.results.map(p => new Post(p))
    logger.log(res.data.posts, 'search results')
    AppState.searchResults = res.data.posts
    logger.log(AppState.searchResults, 'appstate')
  }
}

export const postService = new PostService()
