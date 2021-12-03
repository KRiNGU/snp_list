import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './List/reducer';
import sagas from './List/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
    reducer: reducer,
    middleware: middlewares,
    devTools: process.env.NODE_EN !== 'production',
});

sagaMiddleware.run(sagas);
