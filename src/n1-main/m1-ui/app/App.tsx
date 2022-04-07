import React, {useEffect} from 'react';
import './App.css';
import {Main} from '../Main';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../m2-bll/store';
import {authMeTC} from '../../m2-bll/b1-reducers/appReducer';
import {useNavigate} from 'react-router-dom';
import {PATH} from '../routes/RoutesRoot';
import preload from '../common/c0-Preloder/Spinner.svg';

export const App = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const isInitialize = useSelector<AppStoreType, boolean>(state => state.app.isInitialize)

    useEffect(() => {
        dispatch(authMeTC())
        if (!isLoggedIn) {
            navigate(PATH.LOGIN);
        }
    }, [])

    if (!isInitialize) {
        return (
            <img src={preload} alt={'pic'}/>
        );
    }

    return (
        <div className="App">
            <Main/>
        </div>
    );
}

