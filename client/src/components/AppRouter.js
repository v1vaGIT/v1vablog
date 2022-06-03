import React, { useContext } from 'react';
// import {Routes, Route, Redirect} from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
import { Redirect } from 'react-router';

import {
  
  BrowserRouter,  
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import Auth from '../pages/Auth';
import { NEWS_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        // <BrowserRouter>
            
            <Routes>
            
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path}  element={<Component />} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component />
            } exact />
            )}     
            <Route path="*" element={<Navigate to="/news" replace/>} />
            
            </Routes>
        // </BrowserRouter>
    );
};

export default AppRouter;