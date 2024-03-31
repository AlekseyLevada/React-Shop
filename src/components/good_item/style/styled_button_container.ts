import styled from 'styled-components'

export const StyledButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 966px) {
      grid-template-columns: 1fr;
      gap: 10px;
      }
    button {
      width: 100%;
      margin: 0;
    }
`