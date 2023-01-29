import styled from "styled-components"

export const StyledNavbar = styled.nav`
position: relative;
    display:flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100px;
    background-color: #2A284F;
    color: #FFCA05;
    font-size: 14px;
    font-weight: bold;
    list-style: none;
    box-shadow: 0px 0px 10px #2A284F;
    h1{
        font-family:'Pacifico', cursive;
        font-size: 30px;
        transform: rotate(-20deg);
        text-shadow: 0px 0px 5px #FFCA05;
        span {
            color: #F5252C;
            font-size: 50px;
        }
    }
    h1::first-letter{
        color: #F5252C;
        font-size: 48px;
    }
`