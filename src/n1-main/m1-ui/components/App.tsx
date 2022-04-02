import React from 'react';
import s from './App.module.css';
import {Main} from './Main/Main';
import {Header} from "../heder/Header";
import {RoutesRoot} from "../routes/RoutesRoot";
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";


export const  App = () => {
    return (
        <div className={s.container}>
            <Header/>
            <Main/>
            <RoutesRoot/>
        </div>
    );
}

