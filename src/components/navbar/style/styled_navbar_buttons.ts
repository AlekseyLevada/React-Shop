import styled from "styled-components";

export const StyledNavbarButtons = styled.ul`
  display: flex;
  gap: 20px;

  @media screen and (max-width:360px) {
    flex-direction: column;
    gap: 10px;
    width:100%;

    button {
      width: 100%;
    }
  }
  
    button {
      background-color: #FFFFFF;
      color: #2a284e;
      padding: 7px;
      margin: 0px;
    }
`