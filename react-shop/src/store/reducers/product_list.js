import { createSlice } from '@reduxjs/toolkit'

export const productList = createSlice({
    name: 'product_list',
    initialState: {
        products: [],
    },
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
        }
    },
})

export const { getProducts } = productList.actions

export const getProductsFunc = (param) => (dispatch) => {
    fetch('http://localhost:2000/product/list', {
        method: 'GET',
    }).then((res) => res.json()).then((data) => {
        const products = data.products;
        dispatch(getProducts(products));
    });

};

export default productList.reducer