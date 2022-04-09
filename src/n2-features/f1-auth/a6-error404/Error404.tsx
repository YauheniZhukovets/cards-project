import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Error404.module.css'
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import style from '../../../n1-main/m1-ui/styles/EditProfile.module.css';
import img404 from './404.png'

export function Error404() {
    return (
        <div className={s.errorBlock}>
            <img src={img404} alt="404"/>
            <div>Not Found</div>
            <div>
                <NavLink to={PATH.PROFILE}><SuperButton
                    className={style.btn}
                    style={{background: 'rgba(232, 226, 226, 0.6)', color: '#2D2E46'}}>Go to homepage
                </SuperButton>
                </NavLink>
            </div>

        </div>
    )
}


