import {FC} from "react";
import { Navbar } from '../navbar'
import { Outlet } from 'react-router-dom'
import { Clock } from '../clock'
import { StyledMainLayout } from './style'

export const MainLayout:FC = ():JSX.Element => {

    return (
        <StyledMainLayout>
            <Clock />
            <Navbar/>
            <Outlet />
        </StyledMainLayout>
    )
}