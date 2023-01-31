import { createSlice } from '@reduxjs/toolkit'
import { iPayload } from '../types'
import { createInitialState } from '../../state/goods'
import { createExtraReducers } from '../../reducers/goods'

export const slice = createSlice({
    name: 'goods',
    initialState: createInitialState(),
    reducers: createExtraReducers(),
    extraReducers: (builder) => {
        builder
            .addCase('ADD_TO_BASKET', (state, action: iPayload) => {
                state.basket.push(action.payload)
            })
            .addCase('GET_ALL_GOODS', (state, action: iPayload) => {
                state.list = (action.payload)
            })
            .addCase('DELETE_GOOD', (state, action: iPayload) => {
                
            })
    }
})