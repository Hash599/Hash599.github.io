import {configureStore} from "@reduxjs/toolkit"
import productReducer from '../Store/ProductSlice'
import cartReducer from '../Store/CartSlice'
const store=configureStore({
    reducer:{
        product:productReducer,
        cart:cartReducer
    }
})
export default store
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch