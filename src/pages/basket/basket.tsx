import { ReactNode } from 'react'
import { useSelectorTyped } from "../../global_types/use_selector_type"
import { BasketItem } from "../../components/basket_item"
import { iGood, iGoods, iReduxGoodsState } from '../../global_types'
import { StyledBasketContainer } from "./style"
import { OrderFormBlock } from "../../components/order_form_block"

export function Basket(): JSX.Element {

    const basket = useSelectorTyped<iReduxGoodsState, iGoods>(state => state.goods.basket)
    console.log(basket)
    return (
        <StyledBasketContainer>
            <h3>
                Корзина заказов
            </h3>
            {
                basket.map((good: iGood, index: number) => <BasketItem { ...good } key={ index } />) as JSX.Element[] | ReactNode
            }
            {
                basket.length > 0 ? <OrderFormBlock /> : <p>'Ваша корзина пуста'</p>
            }
        </StyledBasketContainer>
    )
}