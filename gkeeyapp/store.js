import { configureStore } from "@reduxjs/toolkit";
// import cartslice from "./src/features/Slice/cartSlice";
import cartSummarySlice from "./src/features/Slice/cartSummarySlice";


const store = configureStore({

    reducer:{
        cart: cartslice,
        cartSummary :cartSummarySlice
    }
})

export default store