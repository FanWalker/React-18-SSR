import express from 'express';
import {render} from './utils';
import routes from '../Routes';
import { matchPath } from 'react-router-dom';
import getStore from '../store';

const app = express();

app.use(express.static('public'));
app.get('*', function(req, res) {
    console.log('请求成功');
    res.setHeader('Access-Control-Allow-Origin', '*')
    const store = getStore();
    if (req.path === '/getlist') {
        const list = [
            {
                id: '1111',
                title: '张三',
            },
            {
                id: '2222',
                title: '里斯',
            },
        ];
        res.send(JSON.stringify(list));
    }
    else {
        console.log('other');

        const promises = routes.reduce((acc, route) => {
            const matchRes = matchPath(route, req.path);
            if (matchRes?.pattern?.loadData) {
                acc.push(matchRes.pattern.loadData(store));
            }
            return acc;
        }, []);
        Promise.all(promises).then(() => {
            res.send(render(req, routes, store)); 
        });
    }
})

app.listen(3000);
