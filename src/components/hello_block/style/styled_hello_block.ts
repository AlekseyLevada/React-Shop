import styled from 'styled-components'

export const StyledHelloBlock = styled.div`
    padding: 10px;
    color: #fcbf74;
    text-shadow: 0px 0px 2px #2A284E;

    @media screen and (max-width: 420px) {
        h2  {
            font-size: 20px;
            line-height: 24px;
        }
        h3 {
            font-size: 16px;
            line-height: 24px;
        }
    }
`