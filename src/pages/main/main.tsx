import { Outlet } from 'react-router-dom'
import { SearchBlock } from '../../../src/components/search_block'
import { HelloBlock } from '../../../src/components/hello_block'

export function Main() : JSX.Element {
    return (
        <>
            <HelloBlock/>
            <Outlet />
        </>
    )
}