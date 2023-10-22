import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

// import App from './HelloWorldApp';

import './styles.css';


ReactDOM.createRoot(document. getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 100 } />
        {/* <FirstApp title="Hola, soy Gabri"/> */}
    </React.StrictMode>
);