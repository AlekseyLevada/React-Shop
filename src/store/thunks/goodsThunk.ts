import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAsyncGoods = createAsyncThunk('goods/getAsyncGoods',
    async () => {
        const  response = await fetch('https://api.sampleapis.com/coffee/hot')
            .then(res => res.json())
            .then(data => data);
        return response
    })