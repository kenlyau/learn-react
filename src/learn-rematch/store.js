import { init } from '@rematch/core'
import { http } from '../util'

const user = {
  state: {
    status: 'login',
    profile: null
  },
  reducers: {
    changeStatus (state, payload) {
      return Object.assign({}, state, {status: payload})
    },
    updateProfile (state, payload) {
      return Object.assign({}, state, {profile: payload})
    }
  },
  effects: {
    async login (payload, rootState) {
      const res = await http.get('/login', payload)
      if (!res.error) {
        window.localStorage.setItem('user', JSON.stringify(res))
        this.updateProfile(res)
        this.changeStatus('success')
      }
    },
    async logout (payload, rootState) {
      const res = await http.post('/logout')
      if (!res.error) {
        window.localStorage.removeItem('user')
        this.changeStatus('login')
        this.updateProfile(null)
      }
    }
  }
}

const posts = {
  state: [],
  reducers: {
    add (state, payload) {
      return [...state, payload]
    },
    delete (state, payload) {
      return state.filter(item => item.objectId !== payload.objectId)
    }
  },
  effects: {
    async addAsync (payload, rootState) {
      const res = await http.post('/classes/Posts', payload)
      if (!res.error) {
        this.add(Object.assign({}, payload, res))
      }
    },
    async deleteAsync (payload, rootState) {
      const res = await http.delete('/classes/Posts/' + payload.objectId)
      if (!res.error) {
        this.delete(payload)
      }
    },
    async getAsync (payload, rootState) {
      if (rootState.posts.length) {
        return
      }
      const res = await http.get('/classes/Posts')
      if (!res.error) {
        res.results.map(item => this.add(item))
      }
    }
  }
}

export default (initialData = {}) => {
  if (initialData.userProfile) {
    user.state = {
      status: 'success',
      profile: initialData.userProfile
    }
  }
  return init({
    models: {
      user,
      posts
    }
  })
}
