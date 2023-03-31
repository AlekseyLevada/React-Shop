import styled from "styled-components"

export const StyledGoodListItem = styled.div`
  cursor: pointer;
  flex-basis: 250px;
  max-width: 300px;
  border-radius: 5px;
  flex-grow: 1;
  transition: .3s;
    &:hover{
      box-shadow: 0px 0px 5px #2A284E;
      transition: 0.3s;
    }
    p{
      width: 80%;
      margin: 10px auto;
    }
`