import React, { useState } from 'react'
import { Menu } from '../menu'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
    const [menu, setMenu] = useState([
        {
            text: 'Главная',
            link: '/',
        },
        {
            text: 'Товары',
            link: '/goods',
        },
        {
            text: 'Пользователи',
            link: '/users',
        },
        {
            text: 'Отзывы',
            link: '/reviews',
        },
        {
            text: 'Корзина',
            link: '/basket',
        },
    ])

    return (
        <div className='main__layout'>
            <Menu/>
            <Outlet />
        </div>
    )
}