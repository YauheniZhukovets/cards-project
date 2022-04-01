import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './n1-main/m1-ui/App';
import {Provider} from 'react-redux';
import store from './n1-main/m2-bll/store';

//Hy!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

