import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { StyledGoodListItem, StyledGoodListContainer } from './style'
import { iGood, iGoods } from '../../global_types'
import { GoodItem } from '../good_item'
import { createExtraActions } from '../../store/actions/goods'
import { useAppDispatch } from '../../store/'

export interface iReduxGoodsState {
    goods: {
        basket: iGoods,
        list: iGoods,
    }
}

export function GoodList(): JSX.Element {

    const { getAllGoods } = createExtraActions()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllGoods())
    }, [])

    const goods: any = useSelector<iReduxGoodsState>(state => state.goods.list)
    
    return (
        <StyledGoodListContainer>
            {
                goods.map((good: iGood, index: number) => <StyledGoodListItem key={good.ID + index}>
                    <GoodItem data={good} />
                </StyledGoodListItem>) as JSX.Element[] | ReactNode
            }
        </StyledGoodListContainer>
    )
}