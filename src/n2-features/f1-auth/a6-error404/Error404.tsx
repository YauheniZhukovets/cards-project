import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Error404.module.css'
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import img404 from './error.png'

export function Error404() {
    return (
        <div className={s.errorBlock}>
            <div className={s.title}>Not Found</div>
            <div>
                <NavLink to={PATH.PROFILE}><SuperButton
                    className={s.btn}
                    style={{background: 'rgba(192,59,59,0.6)', color: '#ededf3'}}>Go to homepage
                </SuperButton>
                </NavLink>
            </div>
            <img src={img404} alt="404"/>

        </div>
    )
}


