import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAsyncGoods = createAsyncThunk('goods/getAsyncGoods',
    async () => {
        const  response = await fetch('http://localhost:3001/goods/get')
            .then(res => res.json())
            .then(data => data);
        return response
    })
