import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Login} from '../../../n2-features/f1-auth/a1-login/Login';
import {Error404} from '../../../n2-features/f1-auth/a6-error404/Error404';
import {Registration} from '../../../n2-features/f1-auth/a2-registration/Registration';
import {NewPassword} from '../../../n2-features/f1-auth/a3-newPassword/NewPassword';
import {PasswordRecovery} from '../../../n2-features/f1-auth/a4-passwordRecovery/PasswordRecovery';
import {Profile} from '../../../n2-features/f1-auth/a5 -profile/Profile';



export const PATH = {
    TEST: '/test',
    LOGIN: '/login',
    REGISTRATION: '/registration',
    NEW_PASSWORD: '/new-password',
    PASSWORD_RECOVERY: '/password-recovery',
    PROFILE: '/profile',
}

export const RoutesRoot = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Profile/>} />
                <Route path={PATH.LOGIN} element={<Login/>} />
                <Route path={PATH.REGISTRATION} element={<Registration/>} />
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>} />
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>} />
                <Route path={PATH.PROFILE} element={<Profile/>} />
                <Route path={'*'} element={<Error404/>} />
            </Routes>
        </div>
    );
};
