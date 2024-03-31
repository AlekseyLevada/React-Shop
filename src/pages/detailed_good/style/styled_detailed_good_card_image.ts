import styled from "styled-components";

export const StyledDetailedGoodImage = styled.div`
width:300px;
height:460px;
display: flex;
justify-content: center;
align-items: center;

img {
  width:inherit;
  height: inherit;
  border-radius: 5px;
}

@media screen and (max-width: 600px) {
  align-self: center;
  width: 150px;
  height: 230px;
  gap: 20px;
}
`