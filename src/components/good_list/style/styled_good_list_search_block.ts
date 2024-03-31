import styled from 'styled-components'

export const StyledSearchBlock = styled.form`
margin-bottom: 10px;
input {
    border-radius: 5px 5px 0px 0px;
    font-size: 14px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #a0a1a3;
    background: transparent;
    width: 100%;
    max-width:580px;
    height: 40px;
    &:focus, :active, :hover{
            outline: none;
            border-bottom: 2px solid #a0a1a3;
        }
}
`