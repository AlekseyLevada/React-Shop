import {FC} from "react";
import { StyledHelloBlock } from "./style"

export const HelloBlock:FC = ():JSX.Element => {
    return(
        <StyledHelloBlock>
            <h2>
                Добро пожаловать в iNordic Shop
            </h2>
            <h3>
                Сеть магазинов вкусного кофе в Норвегии Эстонии и Швеции
            </h3>
        </StyledHelloBlock>
    )
}