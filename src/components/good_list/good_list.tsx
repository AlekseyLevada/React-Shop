import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { StyledGoodListItem, StyledGoodListContainer } from './style'
import { iGood, iGoods, iReduxGoodsState } from '../../global_types'
import { GoodItem } from '../good_item'
import { createExtraActions } from '../../store/actions/goods'
import { useAppDispatch } from '../../store/'

export function GoodList(): JSX.Element {

    const { getAllGoods } = createExtraActions()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllGoods())
    }, [])

    const goods = useSelector<iReduxGoodsState, iGoods>(state => state.goods.list)
    
    return (
        <StyledGoodListContainer>
            {
                goods.map((good: iGood, index: number) => <StyledGoodListItem key={index}>
                    <GoodItem { ...good }/>
                </StyledGoodListItem>)
            }
        </StyledGoodListContainer>
    )
}