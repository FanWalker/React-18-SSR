import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, getHomeList } from '../../store/reducer';
import Header from '../Header';

const Home = () => {
    const {name, list} = useSelector(state => state.home);
    const dispatch = useDispatch();
    function getNewName() {
        console.log('get new name');
        dispatch(changeName('hello new name'));
    }

    useEffect(()=> {
        console.log('111', 111);
        dispatch(getHomeList());
    }, []);

    return <div>
        <Header />
        {name} home
        {
            list.map(item => (
                <div key={item.id}>
                    {item.title}
                </div>
            ))
        }
        <div onClick={getNewName}>change name1</div>
    </div>
}

Home.loadData = store => {
    // 执行action，扩充store。
    return store.dispatch(getHomeList());
}

export default Home;
