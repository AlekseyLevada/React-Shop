import styled from 'styled-components'

export const StyledSearchBlock = styled.form`
padding: 10px 0;
input {
    border-radius: 5px 5px 0px 0px;
    font-size: 14px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #a0a1a3;
    background: transparent;
    width: 20%;
    height: 30px;
    &:focus, :active, :hover{
            outline: none;
            border-bottom: 2px solid #a0a1a3;
        }
}
`