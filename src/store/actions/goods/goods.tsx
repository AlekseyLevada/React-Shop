import { iGood, iGoods } from '../../../global_types'
import goodsJSON from '../../../stub/goods.json'
import { createAsyncThunk } from '@reduxjs/toolkit'

export function createExtraActions() {

    return {
        getAllGoods: getAllGoods, // Для корректной работы санок значением ложна быть функция getAllGoods()
        addGoodToBasket: addGoodToBasket,
        deleteGoodFromBasket: deleteGoodFromBasket,
        changeGoodCount: changeGoodCount,
        findGoods: findGoods,
        regNewUser: regNewUser,
    }

    function regNewUser(data: any) {
        return {
            type: 'REGISTER_NEW_USER',
            payload: data,
        }
    }

    function findGoods(e: any, goods: iGoods) {
        return {
            type: 'FIND_GOODS',
            payload: {
                inputValue: e.target.value,
                goods,
                goodsJSON,
            },
        }
    }

    //Action заглушки для товаров приложения

    function getAllGoods() {
        return {
            type: 'GET_ALL_GOODS',
            payload: [...goodsJSON],
        }
    }


    // Запрос к API

    // function getAllGoods() {
    //     return createAsyncThunk<any>(
    //         'getAllGoods',
    //             async () => {
    //                 const response = await fetch('http://localhost:3001/goods/get')
    //                 .then(res => res.json())
    //                 return response
    //             }
    //         )
    // }

    function addGoodToBasket(good: iGood) {
        return {
            type: 'ADD_GOOD_TO_BASKET',
            payload: { ...good },
        }
    }

    function deleteGoodFromBasket(good: iGood) {
        return {
            type: 'DELETE_GOOD_FROM_BASKET',
            payload: good,
        }
    }

    function changeGoodCount(operation: string, good: iGood) {
        return {
            type: 'CHANGE_GOOD_COUNT',
            payload: {
                operation,
                good,
            }
        }
    }

}