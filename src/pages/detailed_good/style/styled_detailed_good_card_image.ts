import styled from "styled-components";

export const StyledDetailedGoodImage = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 10px;
    box-shadow: 0px 0px 10px #2a284e;
    background-color: #2a284e;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    display: block;
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 0px 5px #000;
  }
`