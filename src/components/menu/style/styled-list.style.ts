import styled, { css } from 'styled-components'
import { iStyledList } from '../types'

export const StyledList = styled.ul<iStyledList>`
list-style:none;
display: flex;
li {
    border-bottom: 1px solid #fff;
    margin: 0px 3px;
    margin-right: ${prop => prop.type === 'buttons' ? '25px' : '5px'};
    &:hover {
        border-bottom: 1px solid #FFCA05;
    }
    a {
        text-decoration: none;
        ${props => props.type === 'buttons' ? css`
            color: #2a284f;
            background: #fff;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 5px;
        `
        : css`
            color: #fff;
        `
    }
    }
}
`