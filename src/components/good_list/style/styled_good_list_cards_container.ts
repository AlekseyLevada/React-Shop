import styled from 'styled-components'

export const StyledGoodListCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media screen and (max-width:966px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width:480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`