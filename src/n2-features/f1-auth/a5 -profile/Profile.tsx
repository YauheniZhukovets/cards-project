import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate, NavLink} from 'react-router-dom';

export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const userName = useSelector<AppStoreType, string | undefined>(state => state.login.user?.name)
    const userAvatar = useSelector<AppStoreType, string | undefined>(state => state.login.user?.avatar)

    if (!isLoggedIn) return <Navigate to={PATH.REGISTRATION}/>
    /*if (!user) return <Navigate to={PATH.REGISTRATION}/>*/

    return (
        <div>
            <span>ProfilePage</span>
            <div>
                <img src={userAvatar} alt="img"/>
            </div>
            <h3>{userName}</h3>
            <span>Front-end-developer</span>
            <div>
                <NavLink to={PATH.EDIT_PROFILE}>Edit profile</NavLink>
            </div>
        </div>
    );
};


