import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import { iGood } from '../../components/good_list/types'
import goodsJSON from '../../stub/goods.json'
import { StyledDetailedGoodContainer } from './style'
import { useAppDispatch } from '../../store'
import { createExtraActions } from '../../store/actions/goods'

export function DetailedGood(): JSX.Element {

    const [good, setGood] = useState({
        TITLE: '',
        DISCR: '',
        COUNT: '',
        PRICE: '',
        IMG: '',
    })

    const { id } = useParams()
    const dispatch = useAppDispatch()
    const { addToBasket } = createExtraActions()

    useEffect(() => {
        const good = goodsJSON.find((good: iGood) => good.ID === id) as iGood
        setGood(good)
    }, [])

    return (
        <StyledDetailedGoodContainer>
            <img src={good.IMG} alt="good_image" />
            <p>{good.TITLE}</p>
            <p>{good.DISCR}</p>
            <p>{good.PRICE}</p>
            <p>{good.COUNT}</p>
            <Link to={`/`}><button>Назад к списку</button></Link>
            <button onClick={() => dispatch(addToBasket(good))}>Добавить в корзину</button>
        </StyledDetailedGoodContainer>
    )
}