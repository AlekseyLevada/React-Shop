import { createBrowserRouter } from "react-router-dom"
import { MainLayout } from "../../components/main_layout"
import { Main } from "../../pages/main"
import { GoodList } from "../../components/good_list"
import { GoodItem } from '../../components/good_item'
import { Basket } from "../../pages/basket"


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