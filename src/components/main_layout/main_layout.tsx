import React, { useState } from 'react'
import { Menu } from '../menu'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
    const [menu, setMenu] = useState(
        {
            links: [
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
            ],
            buttons: [
                {
                    icon: 'https://img.icons8.com/fluency/512/shopping-cart-loaded.png',
                    text: 'Корзина',
                    link: '/basket',
                }
            ]
        }
    )

    return (
        <div className='main__layout'>
            <Menu menu={menu}/>
            <Outlet />
        </div>
    )
}