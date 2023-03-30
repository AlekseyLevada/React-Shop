import {configureStore} from "@reduxjs/toolkit";
import {basketSlice} from "./slices/basket/basketSlice";
import {goodsSlice} from "./slices/goods/goodsSlice";

export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
        goods: goodsSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store