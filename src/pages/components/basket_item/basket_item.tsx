import { StyledBasketItemContainer, StyledBasketCloseItem } from './style'
import { useAppDispatch } from '../../../store'
import { createExtraActions } from '../../../store/actions/goods'

export function BasketItem({ data }: any): JSX.Element {

    const dispatch = useAppDispatch()
    const { deleteGood } = createExtraActions()
    
    return (
        <StyledBasketItemContainer>
            <h4>
                {data.TITLE}
            </h4>
            <img src={data.IMG} alt="basket_item_image" />
            <h4>
                {data.DISCR}
            </h4>
            <StyledBasketCloseItem onClick={()=>dispatch(deleteGood(data))}>
            </StyledBasketCloseItem>
        </StyledBasketItemContainer>
    )
}