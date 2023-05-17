import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export type Product={
    id:number
    title:string
    image:string
    price:number
}
type InitialState={
    loading:boolean
    product:Product[]
    error:string
    

}
const initialState:InitialState={
    loading:false,
    product:[],
    error:''

}
export const fetchProducts=createAsyncThunk('product/fetchProducts',()=>{
    return axios
    .get('https://fakestoreapi.com/products')
    .then((res)=>res.data)
})
const ProductSlice=createSlice({
    name:'product',
    initialState,
    reducers:{},
  
    extraReducers:(builder)=>{
      builder.addCase(fetchProducts.pending,(state)=>{
        state.loading=true
      })
      builder.addCase(fetchProducts.fulfilled,(state,action:PayloadAction<Product[]>)=>{
        state.loading=false
        state.product=action.payload
        state.error=''
      })
      builder.addCase(fetchProducts.rejected,(state,action)=>{
        state.loading=false
        state.product=[]
        state.error=action.error.message || 'SomeThing Went Wrong'
      })
    }
    
  })
  export default ProductSlice.reducer