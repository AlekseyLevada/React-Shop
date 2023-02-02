import { useState } from 'react'
import { StyledCounterContainer, StyledIncCounterButton, StyledDecCounterButton } from './style'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter( counter + 1)
    }

    function decrement() {
        setCounter( counter - 1)
    }

    return (
        <StyledCounterContainer>
            <StyledDecCounterButton onClick={() => decrement()}></StyledDecCounterButton>
                {counter}
                <StyledIncCounterButton onClick={() => increment()}></StyledIncCounterButton>
        </StyledCounterContainer>
    )
}