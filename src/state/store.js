import {configureStore} from '@reduxjs/toolkit';
import reducer from './List/reducer';

export const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_EN !== 'production',
});