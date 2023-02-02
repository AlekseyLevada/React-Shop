import { useSelector } from "react-redux"
import { BasketItem } from "../components/basket_item"
import { iGood, iReduxGoodsState } from '../../global_types'
import { StyledBasketContainer } from "./style"

export function Basket(): JSX.Element {

    const basket: any = useSelector<iReduxGoodsState>(state => state.goods.basket)
    //console.log(basket)

    return (
        <StyledBasketContainer>
            <h2>
                Корзина заказов
            </h2>
            {
                basket.map((good: iGood, index: number) => <BasketItem data={good} key={good.ID + index} />)
            }
        </StyledBasketContainer>
    )
}