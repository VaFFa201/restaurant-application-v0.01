import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Auth from "./pages/Auth";
import DishPage from "./pages/DishPage";
import Menu from './pages/Menu';
import { ADMIN_ROUTE, BASKET_ROUTE, DISH_ROUTE, LOGIN_ROUTE, MENU_ROUTE, REGISTRATION_ROUTE } from './utils/consts';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: MENU_ROUTE,
        Component: Menu
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DISH_ROUTE + '/:id',
        Component: DishPage
    },
]