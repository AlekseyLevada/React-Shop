import { Link } from 'react-router-dom'
import { StyledGoodItem, StyledButtonContainer, StyledImg, StyledTitle } from './style'
import { createExtraActions } from '../../store/actions/goods'
import { useAppDispatch } from '../../store'
import { iGood } from '../../global_types'

export function GoodItem(good: iGood): JSX.Element {

    const dispatch = useAppDispatch()
    const { addGoodToBasket } = createExtraActions()
    
    return (
        <StyledGoodItem>
            <StyledTitle>
                {good.TITLE}
            </StyledTitle>
            <StyledImg src={good.IMG} alt="product_image" />
            <p>
                {good.DISCR}
            </p>
            <p>
                Колличество на складе {good.COUNT}
            </p>
            <StyledButtonContainer>
                <Link to={`/goods/${good.ID}`}>
                    <button>
                        Подробнее
                    </button>
                </Link>
                <button onClick={ () => dispatch(addGoodToBasket(good))}>
                    В корзину
                </button>
            </StyledButtonContainer>
        </StyledGoodItem>
    )
}