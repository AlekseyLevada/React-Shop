import { Link } from 'react-router-dom'
import { StyledGoodItem, StyledButtonContainer } from './style'

export function GoodItem({data}: any) : JSX.Element {
    return (
        <StyledGoodItem>
            <h2>
                {data.TITLE}
            </h2>
            <img src={data.IMG} alt="product_image"/>
            <p>
                Арттикул {data.ID}
            </p>
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