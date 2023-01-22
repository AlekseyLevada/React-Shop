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
                    text: 'О нас',
                    link: '/goods',
                },
                {
                    text: 'Контакты',
                    link: '/users',
                },
            ],
            buttons: [
                {
                    icon: 'https://img.icons8.com/fluency/512/shopping-cart-loaded.png',
                    text: 'Регистрация',
                    link: '/registration',
                },
                {
                    icon: 'https://img.icons8.com/fluency/512/shopping-cart-loaded.png',
                    text: 'Авторизация',
                    link: '/auth',
                },
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
            <Menu menu={menu} />
            <Outlet />
        </div>
    )
}