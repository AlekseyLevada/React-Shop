import { useSelector } from "react-redux"
import { BasketItem } from "../components"
import { iGoods, iGood } from '../../components/good_list/types'

export interface iReduxGoodsState {
    goods: {
        basket: iGoods
    }
}

export function Basket(): JSX.Element {

    const basket: any = useSelector<iReduxGoodsState>(state => state.goods.basket)
    //console.log(basket)

    return (
        <>
            <h2>
                Корзина
            </h2>
            {
                basket.map((good: iGood, index: number) => <BasketItem data={good} key = {good.ID+index} />)
            }
        </>
    )
}