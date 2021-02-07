import {
    SET_CATEGORIES,
  } from '@/store/types/mutations.type'
  
  import {
    GET_CATEGORIES,
  } from '@/store/types/actions.type'
  
  export const state = () => ({
    data: [],
    loading: true
  })
  
  export const mutations = {
    [SET_CATEGORIES] (state, value) {
      state.data = value
      state.loading = false
    }
  }
  
  export const actions = {
    [GET_CATEGORIES] ({ commit }, value) {
      commit(SET_CATEGORIES, value)
    }
  }
  
  export const getters = {
    getCategories: state => state.data,
    getCategory: state => (id) => state.data.find(obj => obj.id == id),
  }