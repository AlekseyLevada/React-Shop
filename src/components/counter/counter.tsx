import { useState } from 'react'
import { StyledCounterContainer, StyledIncCounterButton, StyledDecCounterButton } from './style'

export function Counter(): JSX.Element {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <StyledCounterContainer>
            <StyledDecCounterButton disabled={counter === 0?  true: false} onClick={() => decrement()}></StyledDecCounterButton>
            {counter}
            <StyledIncCounterButton onClick={() => increment()}></StyledIncCounterButton>
        </StyledCounterContainer>
    )
}