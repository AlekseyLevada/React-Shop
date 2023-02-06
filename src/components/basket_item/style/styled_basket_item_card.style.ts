import styled from 'styled-components'

export const StyledBasketItemCard = styled.div`
    position: relative;
    background-color: #F4F4F6;
    padding: 10px 0px 10px 10px ;
    margin: 20px auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: 1px solid #2A284E;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #CCC6C5;
    z-index: 1;
    img {
        border-radius: 3px;
        outline: 1px solid #2A284E;
        width: 200px;
        box-shadow: 0px 0px 10px #CCC6C5;
    }
    p:first-child {
        width: 100px;
    }
    p:last-child {
        width: 400px;
        margin: 5px;
    }
`