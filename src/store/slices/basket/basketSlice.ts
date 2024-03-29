import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICoffee} from "../../../global_types/coffee/ICoffee";

type basketStateType = {
    basket: ICoffee[]
}

const initialState: basketStateType = {
    basket: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addGoodToBasket: (state:basketStateType, action:PayloadAction<ICoffee>) => {
            state.basket.push(action.payload)
        },
        deleteGoodFromBasket: (state:basketStateType , action:PayloadAction<ICoffee>) => {
            state.basket = state.basket.filter((good:ICoffee) => action.payload.id !== good.id)
        },
        decrementGoodCount: (state:basketStateType, action:PayloadAction<ICoffee>) => {
            state.basket.map((good:ICoffee) => {
                if (good.id === action.payload.id) {
                    good.quantity! -= 1
                    good.total_price = good.price! * good.quantity!
                }
            })
        },
        incrementGoodCount: (state:basketStateType, action:PayloadAction<ICoffee>) => {
            state.basket.map((good:ICoffee) => {
                if (good.id === action.payload.id) {
                    good.quantity! += 1
                    good.total_price = good.price! * good.quantity!
                }
            })
        },
    },
    extraReducers: builder =>  {

    },
})

export const {addGoodToBasket, deleteGoodFromBasket, decrementGoodCount, incrementGoodCount} = basketSlice.actions
export default basketSlice.reducer