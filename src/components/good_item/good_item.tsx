import { StyledGoodItem } from './style'

export function GoodItem({data}: any) : JSX.Element {
    return (
        <StyledGoodItem>
            <h2>
                {data.TITLE}
            </h2>
            <img src={data.IMG} alt="product_image" />
            <p>
                {data.DISCR}
            </p>
            <p>
                Колличество на складе {data.COUNT}
            </p>
        </StyledGoodItem>
    )
}