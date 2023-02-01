import { StyledMainLayout } from './style'
import { useState } from 'react'
import { Navbar } from '../navbar'
import { Outlet } from 'react-router-dom'
import { Clock } from '../clock'

export function MainLayout(): JSX.Element {
    const [menu, setMenu] = useState(
        {
            links: [
                {
                    text: 'Главная',
                    link: '/',
                },
                {
                    text: 'О нас',
                    link: '/about',
                },
                {
                    text: 'Контакты',
                    link: '/contacts',
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
        <StyledMainLayout>
            <Navbar menu={menu} />
            <Outlet />
        </StyledMainLayout>
    )
}