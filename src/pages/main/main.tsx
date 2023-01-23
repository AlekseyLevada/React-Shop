import { Outlet } from 'react-router-dom'
import { HelloBlock, SearchBlock } from './components'

export function Main() : JSX.Element {
    return (
        <>
            <HelloBlock/>
            <SearchBlock/>
            <Outlet />
        </>
    )
}