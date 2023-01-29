import { Link } from 'react-router-dom'
import { StyledGoodItem, StyledButtonContainer, StyledImg, StyledTitle } from './style'

export function GoodItem({ data }: any): JSX.Element {
    return (
        <StyledGoodItem>
            <StyledTitle>
                {data.TITLE}
            </StyledTitle>
            <StyledImg src={data.IMG} alt="product_image" />
            <p>
                {data.DISCR}
            </p>
            <p>
                Колличество на складе {data.COUNT}
            </p>
            <StyledButtonContainer>
                <Link to={`/goods/${data.ID}`}>
                    <button>
                        Подробнее
                    </button>
                </Link>
                <button>
                    В корзину
                </button>
            </StyledButtonContainer>
        </StyledGoodItem>
    )
}