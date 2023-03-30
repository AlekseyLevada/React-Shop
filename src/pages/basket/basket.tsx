import { FC } from 'react'
import { iGood } from '../../global_types'
import { BasketItem } from "../../components/basket_item"
import { OrderFormBlock } from "../../components/order_form_block"
import { StyledBasketContainer } from "./style"
import {useAppSelector} from "../../main_store/hooks";

export const Basket:FC = ():JSX.Element => {

    const basket = useAppSelector(state => state.basket.basket)
    
    return (
        <StyledBasketContainer>
            <h3>
                Корзина заказов
            </h3>
            {
                basket.map((good: iGood, index: number) => <BasketItem { ...good } key={ index } />)
            }
            {
                basket.length > 0 ? <OrderFormBlock /> : <p>'Ваша корзина пуста'</p>
            }
        </StyledBasketContainer>
    )
}