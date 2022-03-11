import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Header} from './m1-ui/heder/Header';
import {RoutesRoot} from './m1-ui/routes/RoutesRoot';

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

