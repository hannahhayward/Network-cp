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
    // const posts = AppState.posts.find(p => p.id === post)
    // const post = p.likes.push(AppState.account.id)
    post.likes.push(AppState.account.id)

    logger.log(post)
    await api.put('api/posts/' + post._id, post)
    logger.log(post)
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
    logger.log(res, 'search results')
    AppState.searchResults = res.data
    logger.log(AppState.searchResults, 'appstate')
  }
}

export const postService = new PostService()
