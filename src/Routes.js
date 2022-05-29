import React from 'react';
// import { useRoutes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

const routes = [
    {
        path: '/',
        element: <Home />,
        loadData: Home.loadData
    },
    {
        path: '/login',
        element: <Login />,
    },
];


export default routes;
