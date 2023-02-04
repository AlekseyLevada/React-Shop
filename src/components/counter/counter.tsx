import { useState } from 'react'
import { StyledCounterContainer, StyledIncCounterButton, StyledDecCounterButton } from './style'

export function Counter(): JSX.Element {
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