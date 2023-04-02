import styled from "styled-components";

export const StyledDetailedGoodCard = styled.div`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  gap: 40px;
  @media screen and (max-width: 620px) {
    flex-direction: column;
  }
`;
