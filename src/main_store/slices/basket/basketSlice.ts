import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {iGood} from "../../../global_types";

type basketStateType = {
    basket: iGood[]
}

const initialState: basketStateType = {
    basket: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addGoodToBasket: (state:basketStateType, action:PayloadAction<iGood>) => {
            state.basket.push(action.payload)
        },
        deleteGoodFromBasket: (state:basketStateType , action:PayloadAction<iGood>) => {
            state.basket = state.basket.filter((good:iGood) => action.payload.ID !== good.ID)
        }
    },
    extraReducers: builder =>  {

    },
})

export const {addGoodToBasket, deleteGoodFromBasket} = basketSlice.actions
export default basketSlice.reducer