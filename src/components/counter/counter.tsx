import {FC, useState} from 'react'
import { StyledCounterContainer, StyledIncCounterButton, StyledDecCounterButton } from './style'

export const Counter:FC = ():JSX.Element => {
    const [counter, setCounter] = useState(1)

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <StyledCounterContainer>
            <StyledDecCounterButton disabled={counter === 1?  true: false} onClick={() => decrement()}></StyledDecCounterButton>
            {counter}
            <StyledIncCounterButton onClick={() => increment()}></StyledIncCounterButton>
        </StyledCounterContainer>
    )
}