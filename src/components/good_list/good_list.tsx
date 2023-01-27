import { ReactNode } from 'react'

import { StyledGoodListItem, StyledGoodListContainer } from './style'
import { iGood } from './types'
import { GoodItem } from '../good_item'
import goodsJSON from '../../stub/goods.json'

export function GoodList(): JSX.Element {
    return (
        <StyledGoodListContainer>
            {
                goodsJSON.map((good: iGood, index: number) => <StyledGoodListItem key={good.ID + index}>
                        <GoodItem data={good} />
                </StyledGoodListItem>) as JSX.Element[] | ReactNode
            }
        </StyledGoodListContainer>
    )
}