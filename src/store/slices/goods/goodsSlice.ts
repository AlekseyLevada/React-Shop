import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICoffee} from "../../../global_types/coffee/ICoffee";
import {getAsyncGoods} from "../../thunks/goodsThunk";


type goodsListStateType = {
    goodsList: ICoffee[]
}

const initialState: goodsListStateType = {
    goodsList: []
}

export const goodsSlice = createSlice({
    name: 'goodsList',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getAsyncGoods.fulfilled, (state:goodsListStateType, action:PayloadAction<ICoffee[]>) => {
            state.goodsList = action.payload
            state.goodsList.map(good => {
                good.quantity = 1
            })
        })
    },
})

export const {} = goodsSlice.actions
export default goodsSlice.reducer