import styled from 'styled-components'

export const StyledIncCounterButton = styled.div`
    cursor: pointer;
    position: relative;
    width: 30px;
    height: 30px;
    margin:10px;
    border: 2px solid #2A284E;
    border-radius: 50%;
        &::before {
            display: block;
            position: absolute;
            top: 45%;
            left: 24%;

            content: '';
            width: 13px;
            height: 3px;
            border-radius: 5px;
            background-color: #2A284E;
            color: #FDBF74;
        }
        &::after {
            display: block;
            position: absolute;
            top: 45%;
            left: 24%;
            transform: rotate(90deg);
            content: '';
            width: 13px;
            height: 3px;
            border-radius: 5px;
            background-color: #2A284E;
            color: #FDBF74;
        }
`