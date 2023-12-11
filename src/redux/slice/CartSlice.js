import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartItemCount: 0,
    totleAmount: 0,
    restroInfo: localStorage.getItem("restroInfo")
        ? JSON.parse(localStorage.getItem("restroInfo"))
        : []
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const additem = state.cartItems.find(item =>
                item.id === action.payload.id
            )
            if (additem) {
                state.cartItems.itemcount += 1
            }
            else {
                const newItem = { ...action.payload, itemcount: 1 }
                state.cartItems.push(newItem)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        addRestroInfo(state, action) {
            state.restroInfo = action.payload
            localStorage.setItem("restroInfo", JSON.stringify(state.restroInfo))
        },
        removeToCart(state, action) {
            const newCartItems = state.cartItems.filter(item =>
                item.id != action.payload.id
            )
            state.cartItems = newCartItems
            if (state.cartItems.length == 0) {
                state.restroInfo = []
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearToCart(state) {
            state.cartItems = [];
            state.restroInfo = [];
            state.cartItemCount = 0;
            state.totleAmount = 0
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))

        },
        decreaseToCart(state, action) {
            const items = state.cartItems.find(item =>
                item.id == action.id
            )
            if (items.itemcount > 1) {
                state.cartItems.itemcount -= 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            }
            else {
                const newCartitems = state.cartItems.filter(item =>
                    item.id != action.payload.id
                )
                state.cartItems = newCartitems;
                if (state.cartItems.length == 0) {
                    state.restroInfo = []
                    localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                }
            }
        },
        gettotals() {

        }

    }
})
export const { addToCart, addRestroInfo, removeToCart, clearToCart, decreaseToCart, gettotals } = cartSlice.actions;
export default cartSlice.reducer