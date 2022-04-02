import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Login} from '../../../n2-features/f1-auth/a1-login/Login';
import {Error404} from '../../../n2-features/f4-error/Error404';
import {Registration} from '../../../n2-features/f1-auth/a2-registration/Registration';
import {NewPassword} from '../../../n2-features/f1-auth/a3-password/NewPassword';
import {PasswordRecovery} from '../../../n2-features/f1-auth/a3-password/PasswordRecovery';
import {Profile} from '../../../n2-features/f3 -profile/Profile';
import {Test} from '../../../n2-features/f0-test/Test';


export const PATH = {
    TEST: '/test',
    LOGIN: '/login',
    REGISTRATION: '/registration',
    NEW_PASSWORD: 'new-password',
    PASSWORD_RECOVERY: '/password-recovery',
    PROFILE: '/profile',
}

export const RoutesRoot = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Login/>} />
                <Route path={PATH.LOGIN} element={<Login/>} />
                <Route path={PATH.TEST} element={<Test/>} />
                <Route path={PATH.REGISTRATION} element={<Registration/>} />
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>} />
                <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>} />
                <Route path={PATH.PROFILE} element={<Profile/>} />
                {/*<Route path={'/*'} element={<Error404/>} />*/}
            </Routes>
        </div>
    );
};
