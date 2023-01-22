import { Outlet } from 'react-router-dom'
import { HelloBlock } from './components'
import { SearchBlock } from './components'

export function Main() : JSX.Element {
    return (
        <>
            <HelloBlock/>
            <SearchBlock/>
            <Outlet />
        </>
    )
}