import styled from 'styled-components'

export const StyledBasketCloseItem = styled.div`
    cursor: pointer;
    margin: 10px;
    padding: 5px;
    position: relative;
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #CCC6C5;
    transition: .3s;
        &:hover {
            transition: .3s;
            background-color: tomato;
        }
        &::before {
        display: block;
        content: '';
        width: 15px;
        height: 2px;
        background-color: #000;
        top: 14px;
        left: 7px;
        transform: rotate(45deg);
        position: absolute;
        transition: .3s;
        }
        &:hover::before {
            background-color: #fff;
            transition: .3s;
        }
        &::after {
        display: block;
        content: '';
        width: 15px;
        height: 2px;
        background-color: #000;
        top: 14px;
        left: 7px;
        transform: rotate(315deg);
        position: absolute;
        transition: .3s;
        }
        &:hover::after {
            background-color: #fff;
            transition: .3s;
        }
`