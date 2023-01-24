import { Link } from 'react-router-dom'

import { StyledNavbar, StyledList } from './style'
import { iNavbar, buttonsAndLinks } from './types'

export function Navbar({ menu: { buttons, links } }: iNavbar) : JSX.Element { 
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
                            </Link>
                        </li>)
                }
            </StyledList>
        </StyledNavbar>
    )
}