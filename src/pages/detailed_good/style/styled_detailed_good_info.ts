import styled from "styled-components";

export const StyledDetailedGoodInfo = styled.div`
  flex-basis: 300px;
  flex-grow: 1;
  h2 {
    width: fit-content;
    font-size: 25px;
    margin: 10px auto;
    text-align: center;
    position: relative;

    &:first-letter {
      color: tomato;
    }

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      background-color: tomato;
      border-radius: 50%;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  p{
    text-align: justify;
    margin: 10px auto;
  }
`