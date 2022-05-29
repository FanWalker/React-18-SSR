import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from 'react-router-dom';


export const render = (req, routes, store) => {
    console.log('render', routes);
    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes>
                    {
                        routes.map(route => (
                            <Route key={route.path} {...route} />
                        ))
                    }
                </Routes>
            </StaticRouter>
        </Provider>
    ));
    return `
        <html>
            <body>
                <div id="app">${content}</div>
            </body>
            <script src="/index.js"></script>
        </html>
    `;
}