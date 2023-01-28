export function createExtraActions() {
    return {
        addToBasket: addToBasket,
    }

    function addToBasket(good: any) {
        return {
            type: 'ADD_TO_BASKET',
            payload: { good }
        }
    }
}