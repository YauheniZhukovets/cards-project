import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from '../routes/RoutesRoot';


const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item

export const Header = () => {

    return (
        <div>
            <NavLink className={setActive} to={PATH.LOGIN}> <b> Login </b> </NavLink>
            <NavLink className={setActive} to={PATH.REGISTRATION}> <b> Registration</b> </NavLink>
        </div>
    );
}
