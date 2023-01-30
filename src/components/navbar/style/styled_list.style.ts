import styled, { css } from 'styled-components'
import { iStyledList } from '../types'

export const StyledList = styled.ul<iStyledList>`
    list-style: none;
    display: flex;
li {
    transition: .3s;
    border-bottom: 2px solid #fff;
    margin: 0px 3px;
    margin-right: ${p => p.type === 'buttons' ? '25px' : '5px'};
        &:hover {
            transition: .3s;
            border-bottom: 2px solid #FFCA05;
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
        :
        css`
                color: #FFCA05;
            `
    }
    }
}
`