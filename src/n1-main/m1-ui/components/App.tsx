import React from 'react';
import s from './App.module.css';
import {Main} from './Main/Main';
import {Header} from "../heder/Header";
import {RoutesRoot} from "../routes/RoutesRoot";


export const  App = () => {
    return (
        <div className={s.container}>
            <Header/>
            <RoutesRoot/>
        </div>
    );
}

