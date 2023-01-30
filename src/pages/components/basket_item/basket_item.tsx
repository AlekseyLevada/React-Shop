import { StyledBasketItemContainer, StyledBasketCloseItem } from './style'

export function BasketItem({ data }: any): JSX.Element {
    return (
        <StyledBasketItemContainer>
            <StyledBasketCloseItem>

            </StyledBasketCloseItem>
            <h3>
                {data.TITLE}
            </h3>
            <img src={data.IMG} alt="basket_item_image" />
            <h3>
                {data.DISCR}
            </h3>

        </StyledBasketItemContainer>
    )
}