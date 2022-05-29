import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducer';
const getStore = () => {
    return configureStore({
        reducer: {
            home: rootReducer,
        }
  });
};

export const getClientStore = () => {

}

export default getStore;
