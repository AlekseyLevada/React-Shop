import { Link } from 'react-router-dom'

import goodsJSON from '../../stub/goods.json'
import { GoodItem } from '../good_item'
import { StyledListLi, StyledListUl } from './style'
import { iGood, iGoods } from './types'

export function GoodList() : JSX.Element {
    return (
        <>
            <StyledListUl>
                {
                    goodsJSON.map((good: iGood, index: number) =>
                        <StyledListLi key = {good.TITLE + index}>
                            <Link to = {`./goods/${good.ID}`}>
                                {good.TITLE}
                            </Link>
                            <GoodItem data = {good}/>
                        </StyledListLi>) as any
                }
            </StyledListUl>
        </>
    )
}