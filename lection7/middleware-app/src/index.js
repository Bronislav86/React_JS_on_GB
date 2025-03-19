import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from './store';
import * as ReactDom from "@testing-library/react";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
//import saga from './sagas';
import {configureStore} from "@reduxjs/toolkit";
import asyncMiddleware from "./asyncMiddlewareEx3";
import rootReducer from "./rootReducer";

//EX1
//Это промежуточное ПО для демонстации дополнительных эффектов

const middleWare = store => next => action => {
    console.log('Дополнительный эффект');

    setTimeout(() => {
        console.log('Тайм-ауты, вызовы api и т.д.');
    }, 1000);

    return next(action);
}
//EX2
//Это logger middleware, который выводит действия, отправленные в store
const loggerMiddleware = store => next => action => {
    console.log('dispatching', action);
    return next(action);
}

//EX Saga
//Создаем middleware для Redux-Saga

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistedReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
        },
    }).concat(middleware, loggerMiddleware, asyncMiddleware, thunk, sagaMiddleware), // указываем через заяптую ex1, ex1, ex3..
});

// const store = configureStore({
//     reducer: {
//         ...rootReducer,
//         data: dataReducer,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware,
//     loggerMiddleware, asyncMiddleware, thunk, sagaMiddleware), // указываем через заяптую ex1, ex1, ex3..
// });

//Запускаем нашу сагу
sagaMiddleware.run(mySaga);

//Presist
let persistor = persistStore(store);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//         <React.StrictMode>
//             <App/>
//         </React.StrictMode>
//     </Provider>
// );

ReactDom.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
