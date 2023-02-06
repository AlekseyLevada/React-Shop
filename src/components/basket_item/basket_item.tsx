import { StyledBasketItemContainer, StyledBasketCloseItem } from './style'
import { useAppDispatch } from '../../store'
import { createExtraActions } from '../../../src/store/actions/goods'
import { iGood } from '../../global_types'

export function BasketItem(data: iGood): JSX.Element {

    const dispatch = useAppDispatch()
    const { deleteGoodFromBasket, changeGoodCount } = createExtraActions()

    return (
        <StyledBasketItemContainer>
            <img src={data.IMG} alt="basket_item_image" />

            <p>
                {data.TITLE}
            </p>

            <button disabled={data.QUANTITY === 1 ? true : false} onClick={() => dispatch(changeGoodCount('-', data))}>
                -
            </button>
            <span>
                {data.QUANTITY}
            </span>
            <button onClick={() => dispatch(changeGoodCount('+', data))}>
                +
            </button>
            <p>
                {data.DISCR}
            </p>
            <StyledBasketCloseItem onClick={() => dispatch(deleteGoodFromBasket(data))}></StyledBasketCloseItem>
            <div>
                Итого: { data.QUANTITY * Number(data.PRICE) as number } руб.
            </div>
        </StyledBasketItemContainer>
    )
}