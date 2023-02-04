import { useSelector } from "react-redux"
import { BasketItem } from "../../components/basket_item"
import { iGood, iGoods, iReduxGoodsState } from '../../global_types'
import { StyledBasketContainer } from "./style"

export function Basket(): JSX.Element {

    const basket = useSelector<iReduxGoodsState, iGoods>(state => state.goods.basket)

    return (
        <StyledBasketContainer>
            <h2>
                Корзина заказов
            </h2>
            {
                basket.map((good: iGood, index: number) => <BasketItem { ...good } key={ index } />)
            }
        </StyledBasketContainer>
    )
}