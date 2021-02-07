import {
    GET_PRODUCTS,
    GET_CATEGORIES
} from './types/actions.type'

export const actions = {
    async nuxtServerInit({ dispatch }, { app, $axios, store, redirect }) {
        await $axios
            .get('/products')
            .then(response => dispatch(`products/${GET_PRODUCTS}`, response.data.data))
            .catch(err => console.log(err));

        await $axios
            .get('/categories')
            .then(response => dispatch(`categories/${GET_CATEGORIES}`, response.data.data))
            .catch(err => console.log(err));
    }
}