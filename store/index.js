import {
    GET_PRODUCTS,
    GET_CATEGORIES
} from './types/actions.type'

export const actions = {
    async nuxtServerInit({ dispatch }, { app, $axios, store, redirect }) {
        await $axios
            .get('/products')
            .then(response => {
                // Status'u true olan ürünleri filtreliyoruz ve store'a kaydediyoruz.
                const data = response.data.data.filter(product => product.category);
                dispatch(`products/${GET_PRODUCTS}`, data);
            })
            .catch(err => console.log(err));

        await $axios
            .get('/categories')
            .then(response => {
                // Status'u true olan kategorileri filtreliyoruz ve store'a kaydediyoruz.
                const data = response.data.data.filter(category => category.status);
                dispatch(`categories/${GET_CATEGORIES}`, data);
            })
            .catch(err => console.log(err));
    }
}