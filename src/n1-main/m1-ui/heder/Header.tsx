import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from '../routes/RoutesRoot';
import {Login} from "../../../n2-features/f1-auth/a1-login/Login";
import {Test} from "../../../n2-features/f0-test/Test";
import {Registration} from "../../../n2-features/f1-auth/a2-registration/Registration";
import {NewPassword} from "../../../n2-features/f1-auth/a3-password/NewPassword";
import {PasswordRecovery} from "../../../n2-features/f1-auth/a3-password/PasswordRecovery";
import {Profile} from "../../../n2-features/f3 -profile/Profile";
import {Error404} from "../../../n2-features/f4-error/Error404";


const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item

export const Header = () => {

    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                {/*<h1 className={s.title}>IT-incubator</h1>*/}
                <div className={s.headerBlock}>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.LOGIN} className={s.active }> Main </NavLink>
                    </div>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.LOGIN} className={s.active }> Login </NavLink>
                    </div>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.REGISTRATION} className={s.active }> Register </NavLink>
                    </div>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.NEW_PASSWORD} className={s.active }> Forgot </NavLink>
                    </div>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.PASSWORD_RECOVERY} className={s.active }> SetPassword </NavLink>
                    </div>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.PROFILE} className={s.active }> Profile </NavLink>
                    </div>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.CHECK} className={s.active }> Packs </NavLink>
                    </div>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.TEST} className={s.active }> Cards </NavLink>
                    </div>
                    <div className={s.itemMenu}>
                        <NavLink  to={PATH.TEST} className={s.active }> Error</NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
}
// <Route path={'/'} element={<Login/>} />
// <Route path={PATH.LOGIN} element={<Login/>} />
// <Route path={PATH.TEST} element={<Test/>} />
// <Route path={PATH.REGISTRATION} element={<Registration/>} />
// <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>} />
// <Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>} />
// <Route path={PATH.PROFILE} element={<Profile/>} />
// <Route path={'/*'} element={<Error404/>} />
