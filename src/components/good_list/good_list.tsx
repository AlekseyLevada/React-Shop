import { Link } from 'react-router-dom'

import { StyledListLi, StyledListUl } from './style'
import { iGood, iGoods } from './types'
import { GoodItem } from '../good_item'
import goodsJSON from '../../stub/goods.json'


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