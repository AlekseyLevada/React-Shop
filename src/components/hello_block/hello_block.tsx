import {FC} from "react";
import { StyledHelloBlock } from "./style"

export const HelloBlock:FC = ():JSX.Element => {
    return(
        <StyledHelloBlock>
            <h2>
                Добро пожаловать в&nbsp;iNordic&nbsp;Shop
            </h2>
            <h3>
                Сеть магазинов вкусного кофе из&nbsp;Норвегии Эстонии и&nbsp;Швеции
            </h3>
        </StyledHelloBlock>
    )
}