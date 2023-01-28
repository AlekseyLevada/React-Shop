import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { iGood } from '../../components/good_list/types'
import goodsJSON from '../../stub/goods.json'
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
    const { addToBasket } = createExtraActions()
    const dispatch = useAppDispatch()
    console.log(addToBasket)

    useEffect(() => {
        const good = goodsJSON.find((good: iGood) => good.ID === id) as iGood
        setGood(good)
    }, [])

    return (
        <>
            <img src={good.IMG} alt="good_image" />
            <p>{good.TITLE}</p>
            <p>{good.DISCR}</p>
            <p>{good.PRICE}</p>
            <p>{good.COUNT}</p>
            <button onClick={ () => dispatch(addToBasket(good))}>Добавить в корзину</button>
        </>
    )
}