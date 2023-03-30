import {FC, useState, useEffect} from 'react'
import { StyledClockContainer } from './style'

export const Clock:FC = ():JSX.Element => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(()=> {
        setInterval(()=> {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    })

    return(
        <StyledClockContainer>
            <h4>
                Текущее время: {time}
            </h4>
        </StyledClockContainer>
    )
}


