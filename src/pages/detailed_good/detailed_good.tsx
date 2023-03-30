import { FC, useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import goodsJSON from '../../stub/goods.json'
import { StyledDetailedGoodContainer, StyledDetailedGoodCard, StyledDetailedGoodButtonsContainer } from './style'
import {useAppDispatch, useAppSelector} from "../../main_store/hooks";
import { iGood } from '../../global_types'
import {addGoodToBasket} from "../../main_store/slices/basket/basketSlice";


export const DetailedGood:FC = (): JSX.Element => {
    const { id } = useParams()
    const dispatch = useAppDispatch()

    const [good, setGood] = useState<iGood>({TITLE: '', DISCR: '', COUNT: '', PRICE: '', IMG: ''})

    useEffect(() => {
        const good: iGood = goodsJSON.find((good: iGood) => good.ID === id) as iGood
        setGood(good)
    }, [])

    return (
        <StyledDetailedGoodContainer>
            <StyledDetailedGoodCard>
                <div>
                    <img src={good.IMG} alt="good_image" />
                </div>
                <div>
                    <h2>
                        {good.TITLE}
                    </h2>
                    <h3>
                        {good.DISCR}
                    </h3>
                    <h3>
                        Цена: {good.PRICE}
                    </h3>
                    <h3>
                        Количество на складе: {good.COUNT}
                    </h3>
                    <StyledDetailedGoodButtonsContainer>
                        <Link to={`/`}>
                            <button>
                                Назад к списку
                            </button>
                        </Link>
                        <button onClick={() => dispatch(addGoodToBasket(good))}>
                            Добавить в корзину
                        </button>
                    </StyledDetailedGoodButtonsContainer>
                </div>
            </StyledDetailedGoodCard>
        </StyledDetailedGoodContainer>
    )
}