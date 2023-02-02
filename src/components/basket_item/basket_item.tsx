import { StyledBasketItemContainer, StyledBasketCloseItem } from './style'
import { useAppDispatch } from '../../store'
import { createExtraActions } from '../../../src/store/actions/goods'
import { Counter } from '../counter'

export function BasketItem({ data }: any): JSX.Element {

    const dispatch = useAppDispatch()
    const { deleteGood } = createExtraActions()
    
    return (
        <StyledBasketItemContainer>
            <p>
                {data.TITLE}
            </p>
            <img src={data.IMG} alt="basket_item_image" />
            <Counter />
            <p>
                {data.DISCR}
            </p>
            <StyledBasketCloseItem onClick={()=>dispatch(deleteGood(data))}>
            </StyledBasketCloseItem>
        </StyledBasketItemContainer>
    )
}