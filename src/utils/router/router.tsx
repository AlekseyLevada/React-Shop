import { createBrowserRouter } from "react-router-dom"
import { GoodList } from "../../components/good_list"
import { MainLayout } from "../../components/main_layout"
import { Main } from "../../pages/main"

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
                    }
                ]
            },
        ]
    }

])