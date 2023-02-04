import styled from 'styled-components'

export const StyledBasketCloseItem = styled.button`
    align-self: flex-start;
    padding: 5px;
    position: relative;
    width: 30px;
    height: 30px;
    outline: 2px solid #2A284E;
    border-radius: 50%;
    background-color: #CCC6C5;
    transition: .3s;
        &:hover {
            transition: .3s;
            background-color: tomato;
            outline: 2px solid #CCC6C5;
        }
        &::before {
        position: absolute;
        display: block;
        content: '';
        width: 15px;
        height: 3px;
        border-radius: 5px;
        background-color: #000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: auto;
        margin-left: auto;
        transform: rotate(45deg);
        transition: .3s;
        }
        &:hover::before, :hover::after {
            background-color: #fff;
            transition: .3s;
        }
        &::after {
        display: block;
        position: absolute;
        content: '';
        width: 15px;
        height: 3px;
        border-radius: 5px;
        background-color: #000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-top: auto;
        margin-bottom: auto;
        margin-right: auto;
        margin-left: auto;
        transform: rotate(315deg);
        transition: .3s;
        }
`