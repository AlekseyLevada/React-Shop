import goodsJSON from '../../../stub/goods.json'

export function createExtraActions() {

    return {
        addToBasket: addToBasket,
        getAllGoods: getAllGoods,
    }

    function addToBasket(good: any) {
        return {
            type: 'ADD_TO_BASKET',
            payload: { ...good }
        }
    }

    function getAllGoods() {
        return{
            type: 'GET_ALL_GOODS',
            payload: [ ...goodsJSON ]
        }
    }
}