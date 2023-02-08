import { StyledBasketItemContainer, StyledBasketCloseItem, StyledBasketItemCard, StyledBasketItemTotalPrice, StyledCounterContainer, StyledIncCounterButton, StyledDecCounterButton } from './style'
import { useAppDispatch } from '../../store'
import { createExtraActions } from '../../../src/store/actions/goods'
import { iGood } from '../../global_types'

export function BasketItem(data: iGood): JSX.Element {

    const dispatch = useAppDispatch()
    const { deleteGoodFromBasket, changeGoodCount } = createExtraActions()

    return (
        <StyledBasketItemContainer>
            <StyledBasketItemCard>
                <img src={data.IMG} alt="basket_item_image" />
                <p>
                    {data.TITLE}
                </p>
                <StyledCounterContainer>
                    <StyledDecCounterButton disabled={data.QUANTITY === 1 ? true : false} onClick={() => dispatch(changeGoodCount('-', data))}>
                    </StyledDecCounterButton>
                    <span>
                        {data.QUANTITY}
                    </span>
                    <StyledIncCounterButton onClick={() => dispatch(changeGoodCount('+', data))}>
                    </StyledIncCounterButton>
                </StyledCounterContainer>
                <p>
                    {data.DISCR}
                </p>
                <StyledBasketCloseItem onClick={() => dispatch(deleteGoodFromBasket(data))}></StyledBasketCloseItem>

            </StyledBasketItemCard>
            <StyledBasketItemTotalPrice>
                Итого: {data.TOTAL_PRICE} руб.
            </StyledBasketItemTotalPrice>
        </StyledBasketItemContainer>
    )
}