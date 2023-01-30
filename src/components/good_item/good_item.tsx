import { Link } from 'react-router-dom'
import { StyledGoodItem, StyledButtonContainer, StyledImg, StyledTitle } from './style'
import { createExtraActions } from '../../store/actions/goods'
import { useAppDispatch } from '../../store'

export function GoodItem({ data }: any): JSX.Element {

    const dispatch = useAppDispatch()
    const { addToBasket } = createExtraActions()
    
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
                <button onClick={ () => dispatch(addToBasket(data))}>
                    В корзину
                </button>
            </StyledButtonContainer>
        </StyledGoodItem>
    )
}