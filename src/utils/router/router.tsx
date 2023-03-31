// Импортируем createHashRouter для корректной работы приложения на GitHub Pages
//Для работы на другом хостинге или домене оставить createBrowserRouter

import { createBrowserRouter, createHashRouter } from "react-router-dom"

import { MainLayout } from "../../components/main_layout"
import { GoodList } from "../../components/good_list"
import { RegistrationPage } from "../../pages/registration"
import { AuthenticationPage } from '../../pages/authentication'
import { Main } from "../../pages/main"
import { AboutPage } from '../../pages/about'
import { ContactsPage } from '../../pages/contacts'
import { Basket } from "../../pages/basket"
import { DetailedGood } from '../../pages/detailed_good'



export const Router = createHashRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Main />,
                children: [
                    {
                        index: true,
                        element: < GoodList />
                    },
                ]
            },
            {
                path: '/goods/:id',
                element: < DetailedGood />
            },
            {
                path: '/basket',
                element: <Basket />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
            {
                path: '/contacts',
                element: <ContactsPage />
            },
            {
                path:'/registration',
                element:<RegistrationPage />
            },
            {
                path:'/authentication',
                element:<AuthenticationPage />
            },
        ]
    }

])