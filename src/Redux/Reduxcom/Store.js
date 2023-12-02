import { configureStore } from "@reduxjs/toolkit"
import Counterreducer from "./Slice/Counterslice"

export const Store = configureStore({
    reducer:{
        counter:Counterreducer
    }
})