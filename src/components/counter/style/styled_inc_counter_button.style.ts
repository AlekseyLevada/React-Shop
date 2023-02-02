import styled from 'styled-components'

export const StyledIncCounterButton = styled.button`
    position: relative;
    width: 30px;
    height: 30px;
    margin:10px;
    outline: 2px solid #2A284E;
    border-radius: 50%;
    background-color: #CCC6C5;
        &:hover {
            background-color: #2A284E;
        }
        &::before {
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: auto;
            margin: auto;
            content: '';
            width: 13px;
            height: 3px;
            border-radius: 5px;
            background-color: #2A284E;
        }
        &::after {
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: auto;
            margin: auto;
            transform: rotate(90deg);
            content: '';
            width: 13px;
            height: 3px;
            border-radius: 5px;
            background-color: #2A284E;
        }
        &:hover::before, :hover::after {
            background-color: #FDBF74;
        }
`