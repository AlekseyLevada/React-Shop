import styled from "styled-components"

export const StyledNavbar = styled.nav`
padding: 10px;
position: relative;
display:flex;
justify-content: space-between;
align-items: center;
background-color: #2A284F;
color: #fcbf74;
font-size: 14px;
font-weight: bold;
list-style: none;
box-shadow: 0px 0px 5px #2A284F;

  @media(max-width: 540px) {
    flex-direction: column;
    gap: 10px;
  }

        h1{
            font-family:'Pacifico', cursive;
            font-size: 30px;
            text-shadow: 0px 0px 5px #FFCA05;
            @media(max-width: 780px) {
              display: none;
            }
                a {
                    text-decoration: none;
                    color: #F3C17F;
                }
            }
        span {
            color: #F5252C;
            font-size: 50px;
        }
        h1::first-letter{
            color: #F5252C;
            font-size: 48px;
        }
   
`