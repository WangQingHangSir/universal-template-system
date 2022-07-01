import userApi from '../../api/user'
import { setItem, getItem, removeItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await userApi.login(payload)
        console.log(response)
        commit('setToken', response.data.data.token)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    async getUserInfo({ commit }) {
      try {
        const response = await userApi.getUserInfo()
        console.log(response)
        commit('setUserInfo', response)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', '')
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
