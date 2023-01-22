import React from 'react'
import { Link } from 'react-router-dom'

import { StyledMenu, StyledList } from './style'
import { iMenu, buttonsAndLinks } from './types'

export function Menu({ menu: { buttons, links } }: iMenu) : JSX.Element{
    return (
        <StyledMenu>
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
        </StyledMenu>
    )
}