import { createSlice } from '@reduxjs/toolkit'
import { iPayload } from '../types'
import { createInitialState } from '../../state/goods'
import { createExtraReducers } from '../../reducers/goods'
import { iGood } from '../../../global_types'

export const slice = createSlice({
    name: 'goods',
    initialState: createInitialState(),
    reducers: createExtraReducers(),
    extraReducers: (builder) => {
        builder
            .addCase('GET_ALL_GOODS', (state, action: iPayload) => {
                state.list = action.payload
            })
            .addCase('ADD_GOOD_TO_BASKET', (state, action: iPayload) => {
                let switcher = false
                action.payload.QUANTITY = 1
                state.basket.map((good: iGood) => {
                    if (good.ID === action.payload.ID) {
                        good.QUANTITY++
                        switcher = true
                    }
                })
                action.payload.QUANTITY = 1

                if (!switcher) {
                    state.basket.push(action.payload) 
                }
            })
            .addCase('DELETE_GOOD_FROM_BASKET', (state, action: iPayload) => {
                state.basket = state.basket.filter((el: iGood) => el.ID !== action.payload.ID)
            })
            .addCase('CHANGE_GOOD_COUNT', (state, action: iPayload) => {
                const { good, operation } = action.payload
                const filteredGoodsInBasket = state.basket.filter((element: iGood) => {
                    if (element.ID === good.ID) {
                        if (operation === '+') {
                            element.QUANTITY = element.QUANTITY + 1
                        }
                        else {
                            element.QUANTITY = element.QUANTITY - 1
                        }
                    }
                    return good
                })
                state.basket = filteredGoodsInBasket
            })
    }
})  