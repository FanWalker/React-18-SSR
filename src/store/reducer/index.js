import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        name: 'maliya',
        list: [],
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeList: (state, action) => {
            state.list = action.payload;
        }
    },
});

export const {
    changeName,
    changeList,
} = globalSlice.actions;

export const getHomeList = params => async dispatch => {
    return axios.get('http://127.0.0.1:3000/getlist').then(res => {
        const list = res.data;
        console.log('res', list);
        dispatch(changeList(list));
    });
}

export default globalSlice.reducer;