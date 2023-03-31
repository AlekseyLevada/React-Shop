import { FC } from 'react'
import {ICoffee} from "../../global_types/coffee/ICoffee";
import { BasketItem } from "../../components/basket_item"
import { OrderFormBlock } from "../../components/order_form_block"
import { StyledBasketContainer } from "./style"
import {useAppSelector} from "../../store/hooks";

export const Basket:FC = ():JSX.Element => {

    const basket = useAppSelector(state => state.basket.basket)
    
    return (
        <StyledBasketContainer>
            <h3>
                Корзина заказов
            </h3>
            {
                basket.map((good:ICoffee, index: number) => <BasketItem good={good} key={ index+good.title} />)
            }
            {
                basket.length > 0 ? <OrderFormBlock /> : <p>'Ваша корзина пуста'</p>
            }
        </StyledBasketContainer>
    )
}