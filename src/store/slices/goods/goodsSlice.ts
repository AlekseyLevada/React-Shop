import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {iGood} from "../../../global_types";
import {getAsyncGoods} from "../../thunks/goodsThunk";



type goodsListStateType = {
    goodsList: iGood[]
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
        builder.addCase(getAsyncGoods.fulfilled, (state:goodsListStateType, action:PayloadAction<iGood[]>) => {
            state.goodsList = action.payload
        })
    },
})

export const {} = goodsSlice.actions
export default goodsSlice.reducer