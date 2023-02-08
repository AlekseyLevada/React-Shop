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

            .addCase('FIND_GOODS', (state, action: iPayload) => {
               state.list.find(el => {
                    if(el.TITLE.toLowerCase() === action.payload.inputValue.toLowerCase()) {
                        state.list = [el]
                    }
                    else if(action.payload.inputValue == '' || action.payload.inputValue == null){
                        state.list = action.payload.goodsJSON
                    }
                })
                //state.list = action.payload.goodsJSON
            })

            .addCase('ADD_GOOD_TO_BASKET', (state, action: iPayload) => {
                action.payload.QUANTITY = 1
                action.payload.TOTAL_PRICE = Number(action.payload.PRICE)
                let switcher = false
                state.basket.map((good: iGood) => {
                    if (good.ID === action.payload.ID) {
                        good.QUANTITY = Number(good.QUANTITY) + 1
                        switcher = true
                    }
                })

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
                            element.QUANTITY = Number(element.QUANTITY) + 1
                            element.TOTAL_PRICE = element.QUANTITY * Number(element.PRICE)
                        }
                        else {
                            element.QUANTITY = Number(element.QUANTITY) - 1
                            element.TOTAL_PRICE = element.QUANTITY * Number(element.PRICE)
                        }
                    }
                    return good
                })
                state.basket = filteredGoodsInBasket
            })
    }
})  