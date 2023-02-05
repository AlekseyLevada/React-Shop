import { ReactNode } from 'react'
import { useSelector } from "react-redux"
import { useSelectorTyped } from "../../global_types/use_selector_type"
import { BasketItem } from "../../components/basket_item"
import { iGood, iGoods, iReduxGoodsState } from '../../global_types'
import { StyledBasketContainer } from "./style"
import { OrderFormBlock } from "../../components/order_form_block"

export function Basket(): JSX.Element {

    const basket = useSelectorTyped<iReduxGoodsState, iGoods>(state => state.goods.basket)

    return (
        <StyledBasketContainer>
            <h2>
                Корзина заказов
            </h2>
            {
                basket.map((good: iGood, index: number) => <BasketItem { ...good } key={ index } />) as JSX.Element[] | ReactNode
            }
            {
                basket.length > 0 ? <OrderFormBlock /> : 'Ваша корзина пуста'
            }
            
        </StyledBasketContainer>
    )
}