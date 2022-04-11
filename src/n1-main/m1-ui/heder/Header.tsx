import React from 'react';
import {PATH} from '../routes/RoutesRoot';
import {NavLink} from 'react-router-dom';

/*const setActive = ({isActive}: { isActive: boolean }) => isActive ? s.activeLink : s.item*/

export const Header = () => {

    return (
        <nav>
            <NavLink to={PATH.PACK_LIST}>PackList</NavLink>
            <NavLink to={PATH.PROFILE}>ProfilePage</NavLink>
        </nav>
    );
}
