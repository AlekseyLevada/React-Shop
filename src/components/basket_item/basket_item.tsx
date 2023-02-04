import { StyledBasketItemContainer, StyledBasketCloseItem } from './style'
import { useAppDispatch } from '../../store'
import { createExtraActions } from '../../../src/store/actions/goods'
import { iGood } from '../../global_types'

export function BasketItem(data: iGood): JSX.Element {

    const dispatch = useAppDispatch()
    const { deleteGoodFromBasket, changeGoodCount } = createExtraActions()

    return (
        <StyledBasketItemContainer>
            <p>
                {data.TITLE}
            </p>
            <img src={data.IMG} alt="basket_item_image" />

            <button disabled={ data.QUANTITY === 1 ? true : false } onClick={ () => dispatch(changeGoodCount('-', data)) }>-</button>
            <span>{data.QUANTITY}</span>
            <button onClick={() => dispatch(changeGoodCount('+', data))}>+</button>
            <p>
                {data.DISCR}
            </p>
            <StyledBasketCloseItem onClick={() => dispatch(deleteGoodFromBasket(data))}>
            </StyledBasketCloseItem>
        </StyledBasketItemContainer>
    )
}