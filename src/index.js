import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
//import Contextprovider from './context/StoreCon.js';
//import StoreCon from './context/StoreCon.js';
import {BrowserRouter} from 'react-router-dom'
import {StoreContextProvider} from './context/StoreContext.js';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <StoreContextProvider>
    <App/>
    </StoreContextProvider>
    </BrowserRouter>
);