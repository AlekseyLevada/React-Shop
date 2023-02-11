import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { StyledGoodListItem, StyledGoodListContainer, StyledGoodListCardsContainer, StyledSearchBlock } from './style'
import { iGood, iGoods, iReduxGoodsState } from '../../global_types'
import { GoodItem } from '../good_item'
//import { goodsActions } from '../../store/slices/goods/goods'
import { useAppDispatch } from '../../store/'
import { createExtraActions } from '../../store/actions/goods'

export function GoodList(): JSX.Element {

    const { getAllGoods } = createExtraActions() // findGoods временно убрал
    //const { findGoods } = createExtraActions()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllGoods())
    }, [])

    const goods = useSelector<iReduxGoodsState, iGoods>(state => state.goods.list)

    return (
        <StyledGoodListContainer>
            {/* <StyledSearchBlock encType="multipart/form-data" method='post'>
                <input type='text' placeholder='Что вы ищите...?' name='search' onChange={(e) => dispatch(findGoods(e, goods))}/>
            </StyledSearchBlock> */}
            <StyledGoodListCardsContainer>
                {
                    goods.map((good: iGood, index: number) => <StyledGoodListItem key={index}>
                        <GoodItem {...good} />
                    </StyledGoodListItem>)
                }
            </StyledGoodListCardsContainer>
        </StyledGoodListContainer>
    )
}