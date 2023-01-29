import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { StyledNavbar, StyledList } from './style'
import { iNavbar, buttonsAndLinks } from './types'
import { iGoods } from '../good_list/types'

export interface iReduxGoodsState {
    goods: {
        basket: iGoods
    }
}

export function Navbar({ menu: { buttons, links } }: iNavbar) : JSX.Element {

    const basket: any = useSelector<iReduxGoodsState>(state => state.goods.basket)

    return (
        <StyledNavbar>
            <StyledList>
                {
                    links.map((link: buttonsAndLinks, index: number) =>
                        <li key={link.text + index}>
                            <Link to={link.link}>
                                {link.text}
                            </Link>
                        </li>)
                }
            </StyledList>
            <StyledList type='buttons'>
                {
                    buttons.map((button: buttonsAndLinks, index: number) =>
                        <li key={button.text + index}>
                            <Link to={button.link}>
                                {button.text}
                                {button.text === 'Корзина' && `(${basket.length})`}
                            </Link>
                        </li>)
                }
            </StyledList>
        </StyledNavbar>
    )
}