import { createBrowserRouter } from "react-router-dom"
import { GoodList } from "../../components/good_list"
import { MainLayout } from "../../components/main_layout"
import { Main } from "../../pages/main"
import { Basket } from "../../pages/basket"
import { GoodItem } from '../../components/good_item'

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
                        element: < GoodItem />
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