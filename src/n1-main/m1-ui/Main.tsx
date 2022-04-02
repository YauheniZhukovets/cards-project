import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Header} from './heder/Header';
import {RoutesRoot} from './routes/RoutesRoot';

export const Main = () => {
    return (
        <div>
            <HashRouter>
                <Header/>
                <RoutesRoot/>
            </HashRouter>
        </div>
    );
};

