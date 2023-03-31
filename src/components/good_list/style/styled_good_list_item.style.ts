import styled from "styled-components"

export const StyledGoodListItem = styled.div`
  cursor: pointer;
  flex-basis: 300px;
  flex-grow: 1;
  border-radius: 5px;
  transition: .3s; 
    &:hover{
      box-shadow: 0px 0px 5px #2A284E, inset 0px 0px 3px #2A284E;
      transition: 0.3s;
    }
    p{
        margin: 10px;
    }
`