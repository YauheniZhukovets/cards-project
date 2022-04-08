import React, {useEffect} from 'react';
import './App.css';
import {Main} from '../Main';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../m2-bll/store';
import {authMeTC} from '../../m2-bll/b1-reducers/appReducer';
import preload from '../common/c0-Preloder/Spinner.svg';

export const App = () => {
    const dispatch = useDispatch()
    const isInitialize = useSelector<AppStoreType, boolean>(state => state.app.isInitialize)

    useEffect(() => {
        dispatch(authMeTC())
    }, [])

    if (!isInitialize) {
        return (
            <img style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '30vh'
            }} src={preload} alt={'pic'}/>
        );
    }

    return (
        <div className="App">
            <Main/>
        </div>
    );
}

