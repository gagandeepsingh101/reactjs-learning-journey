import { createSlice } from "@reduxjs/toolkit";


const cartslice =createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})
export const {addItem,clearCart} = cartslice.actions;

export default cartslice.reducer;