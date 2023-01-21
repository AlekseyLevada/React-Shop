import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


type buttonsAndLinks = {
    text: string
    link: string
    icon?: string
}

interface iMenu {
    menu: {
        buttons: buttonsAndLinks[]
        links: buttonsAndLinks[]
    }
}

interface iStyledList {
    type?: string
}

const StyledMenu = styled.div`
display:flex;
justify-content: space-between;
background-color: #2A284F;
color: #FFCA05;
font-size: 20px;
list-style: none;
`

const StyledList = styled.ul<iStyledList>`
list-style:none;
display: flex;
li{
    border-bottom: 1px solid #fff;
    margin: 0px 3px;
    a {
        text-decoration: none;
        color: ${prop => prop.type === 'buttons' ? 'tomato' : '#fff'};
        background-color: ${prop => prop.type === 'buttons' ? 'white' : ''};
        outline: ${prop => prop.type === 'buttons' ? '1px solid #fff' : ''};
        border-radius: ${prop => prop.type === 'buttons' ? '5px' : ''};
        padding: ${prop => prop.type === 'buttons' ? '5px' : ''};
    }
    &:hover {
        border-bottom: 1px solid #FFCA05;
    }
    margin-right: ${prop => prop.type === 'buttons' ? '25px' : '5px'}
}
`

export function Menu({ menu: { buttons, links } }: iMenu) {
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