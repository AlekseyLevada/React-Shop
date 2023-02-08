import styled from 'styled-components'

export const StyledSearchBlock = styled.form`
padding: 10px;
input {
    border-radius: 5px 5px 0px 0px;
    font-size: 14px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #a0a1a3;
    background-color: #F5F5F6;
    width: 20%;
    height: 30px;
    &:focus, :active, :hover{
            outline: none;
            border-bottom: 2px solid #a0a1a3;
        }
}
`