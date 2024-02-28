import { configureStore } from "@reduxjs/toolkit";
import coordinateReducer from "./slice/CoordinateSlice"
// import cartReducer from "./slice/CartSlice";
import cartReducer from "./slice/CartSlice"

const store = configureStore({
    reducer: {
        coordinate: coordinateReducer,
        // cart: cartReducer,
        cart:cartReducer
    }
})
export default store