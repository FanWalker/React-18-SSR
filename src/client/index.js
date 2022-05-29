import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../Routes';
import getStore from '../store'; // 使用store
import { Provider } from 'react-redux';

const container = document.getElementById('app');

const store = getStore();
// console.log('store', store);

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {
                        routes.map(route => (
                            <Route key={route.path} {...route} />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.hydrateRoot(container, <App />);
