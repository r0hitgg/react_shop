import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './reducers/product_list';

export default configureStore({
  reducer: {
    productList: productListReducer
  },
});