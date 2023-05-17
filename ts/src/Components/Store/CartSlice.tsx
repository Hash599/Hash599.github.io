import { createSlice,PayloadAction } from "@reduxjs/toolkit";



type Products={
    id:number
    title:string
    image:string
    price:number
}
type InitialState={
    product:Products[]
}
const initialState:InitialState={
    product:[]

}
const cartSlice=createSlice({
    name :'cart',
    initialState,
    reducers:{
        add:(state,action:PayloadAction<Products>)=>{
         state.product.push(action.payload)
            
        },
        remove:(state,action:PayloadAction<number>)=> {
         state.product=  state.product.filter((item)=>item.id!==action.payload);
        },

    },
});
export const{add,remove}=cartSlice.actions;
export default cartSlice.reducer;