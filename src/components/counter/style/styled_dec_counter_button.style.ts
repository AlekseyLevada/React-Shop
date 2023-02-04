import styled from 'styled-components'

export const StyledDecCounterButton = styled.button`
    position: relative;
    width: 30px;
    height: 30px;
    margin:10px;
    outline: 2px solid #2A284E;
    border-radius: 50%;
    background-color: #CCC6C5;
    transition: .3s;
        &:hover {
            background-color: #2A284E;
            transition: .3s;
            outline: 2px solid #CCC6C5;
        }
        &::before {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            margin-left: auto;
            margin-right: auto;
            content: '';
            width: 13px;
            height: 3px;
            border-radius: 5px;
            background-color: #2A284E;
            transition: .3s;
        }
        &:hover::before {
            background-color: #FDBF74;
            transition: .3s;
        }
`