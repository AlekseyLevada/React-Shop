import styled from 'styled-components'

export const StyledClockContainer = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
align-items: center;
box-shadow: 0px 0px 5px #000;
background-color: #2A284E;
color: #FDBF74;
padding: 0px 25px;
  @media screen and (max-width:780px) {
  display: none;
}
`