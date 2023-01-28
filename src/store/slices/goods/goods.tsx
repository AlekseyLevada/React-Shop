import { createSlice } from '@reduxjs/toolkit'
import { iPayload } from '../types'
import { createInitialState } from '../../state/goods'

export const slice = createSlice({
    name: 'goods',
    initialState: createInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase('ADD_TO_BASKET', (state, action: iPayload) => {
                state.basket.push(action.payload)
            })
    }
})