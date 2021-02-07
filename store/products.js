// import {
//     SET_PRODUCTS,
//   } from '@/store/types/mutations.type'
  
//   import {
//     GET_PRODUCTS,
//   } from '@/store/types/actions.type'
  
//   export const state = () => ({
//     data: [],
//     loading: true
//   })
  
//   export const mutations = {
//     [SET_PRODUCTS] (state, value) {
//       state.data = value
//       state.loading = false
//     }
//   }
  
//   export const actions = {
//     [GET_PRODUCTS] ({ commit }, value) {
//       commit(SET_PRODUCTS, value)
//     }
//   }
  
//   export const getters = {
//     getProducts: state => state.data,
//     totalProducts: state => state.data.length,
//     getProduct: state => (id) => state.data.find(obj => obj.id == id)
//   }