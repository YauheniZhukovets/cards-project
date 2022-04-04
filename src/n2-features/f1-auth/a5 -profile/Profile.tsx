import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {UserResponseType} from '../../../n1-main/m3-dal/m1-API/loginAPI';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate} from 'react-router-dom';

export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const user = useSelector<AppStoreType, UserResponseType | null>(state => state.login.user)

    if (!isLoggedIn) return <Navigate to={PATH.REGISTRATION}/>

    if (!user) return <Navigate to={PATH.REGISTRATION}/>

    return (

        <div>
            <span>ProfilePage</span>
            <h1>Привет {user.name}!</h1>
            <div>
                <img src={user.avatar} alt="img"/>
            </div>
        </div>
    );
};


