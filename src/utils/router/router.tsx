import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "../../components/main_layout"
import { GoodList } from "../../components/good_list"
import { GoodItem } from '../../components/good_item'

import { Main } from "../../pages/main"
import { Basket } from "../../pages/basket"
import { DetailedGood } from '../../pages/detailed_good'



export const Router = createBrowserRouter([
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
                    {
                        path: '/goods/:id',
                        element: < DetailedGood />
                    },
                ]
            },
            {
                path: '/basket',
                element: <Basket />
            }
        ]
    }

])