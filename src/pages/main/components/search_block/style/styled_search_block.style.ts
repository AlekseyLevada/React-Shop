import styled from 'styled-components'

export const StyledSearchBlock = styled.form`
padding: 10px;
input {
    border-radius: 3px;
    font-size: 14px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #a0a1a3;
    width: 30%;
    height: 30px;
    &:active, :hover, :focus {
            outline: none;
            border-bottom: 2px solid #a0a1a3;
        }
}
`