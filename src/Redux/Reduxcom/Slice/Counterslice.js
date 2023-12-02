import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
    name:"countercom",
    initialState:{
        count:0
    },
reducers:{
    increment:(state)=>{
        state.count+=1
    },
    decrement:(state)=>{
        state.count-=1
    }
}

})

export default Counterslice.reducer
export const countact=Counterslice.actions