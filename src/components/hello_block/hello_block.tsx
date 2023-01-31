import { StyledHelloBlock } from "./style"

export function HelloBlock() : JSX.Element {
    return(
        <StyledHelloBlock>
            <h2>
                Добро пожаловать в iNordic Shop
            </h2>
            <h3>
                Магазин одежды и сувениров из Норвегии Эстонии и Швеции
            </h3>
        </StyledHelloBlock>
    )
}