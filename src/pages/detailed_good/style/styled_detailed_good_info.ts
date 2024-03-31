import styled from "styled-components";

export const StyledDetailedGoodInfo = styled.div`
h2 {
  font-weight: 700;
  font-size:24px;
  line-height: 1.2;
  text-align: center;
  width: fit-content;
  margin: 0 auto 20px auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: tomato;
  }
}
p {
  margin-bottom: 20px;
  text-align: start;
  font-size: 18px;
  line-height: 24px;
}
`