import goodsJSON from '../../../stub/goods.json'

export function createExtraActions() {

    return {
        addToBasket: addToBasket,
        getAllGoods: getAllGoods,
        deleteGood: deleteGood,
    }

    function addToBasket(good: any) {
        return {
            type: 'ADD_TO_BASKET',
            payload: good,
        }
    }

    function getAllGoods() {
        return {
            type: 'GET_ALL_GOODS',
            payload: [...goodsJSON],
        }
    }

    function deleteGood(good: any) {
        return {
            type: 'DELETE_GOOD',
            payload: good,
        }
    }
}