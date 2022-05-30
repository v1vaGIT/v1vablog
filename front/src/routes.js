import Auth from "./pages/Auth";
import News from "./pages/News";
import Profile from "./pages/Profile";
import { LOGIN_ROUTE, NEWS_ROUTE, NEWS_ROUTE_SINGLE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: NEWS_ROUTE_SINGLE,
        Component: News
    },
    {
        path: NEWS_ROUTE,
        Component: News
    },
    
]