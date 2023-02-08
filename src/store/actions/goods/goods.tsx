import { iGood } from '../../../global_types'
import goodsJSON from '../../../stub/goods.json'
import { ChangeEvent } from 'react'

export function createExtraActions() {

    return {
        getAllGoods: getAllGoods,
        addGoodToBasket: addGoodToBasket,
        deleteGoodFromBasket: deleteGoodFromBasket,
        changeGoodCount:changeGoodCount,
        findGoods:findGoods,
    }

    function findGoods(e: ChangeEvent<HTMLInputElement>, good: any) {
        return {
            type:'FIND_GOODS',
            payload: {
                inputValue: e.target.value,
                good,
                goodsJSON,
            },
        }
    }

    function getAllGoods() {
        return {
            type: 'GET_ALL_GOODS',
            payload: [...goodsJSON],
        }
    }

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