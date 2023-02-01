import { useState, useEffect } from 'react'
import { StyledClockContainer } from './style'

export function Clock(): JSX.Element {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=> {
        setInterval(()=> {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    })

    return(
        <StyledClockContainer>
            <h4>
                {time}
            </h4>
        </StyledClockContainer>
    )
}


