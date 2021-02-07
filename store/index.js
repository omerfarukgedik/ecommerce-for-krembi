import {
    GET_CATEGORIES
} from './types/actions.type'

export const actions = {
    async nuxtServerInit({ dispatch }, { app, $axios, store, redirect }) {
        await $axios
            .get('/categories')
            .then(response => dispatch(`categories/${GET_CATEGORIES}`, response.data.data))
            .catch(err => console.log(err));
    }
}