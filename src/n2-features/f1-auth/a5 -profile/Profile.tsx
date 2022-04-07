import React from 'react';
import style from "../../../n1-main/m1-ui/styles/Profile.module.css";
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate, NavLink} from 'react-router-dom';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';

export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const userName = useSelector<AppStoreType, string | undefined>(state => state.login.user?.name)
    const userAvatar = useSelector<AppStoreType, string | undefined>(state => state.login.user?.avatar)

    if (!isLoggedIn) return <Navigate to={PATH.REGISTRATION}/>
    /*if (!user) return <Navigate to={PATH.REGISTRATION}/>*/

    return (
        <div className={style.mainContainer}>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h2>ProfilePage</h2>
                </div>
                <div className={style.imgAvatar} >
                    <img className={style.img} src={userAvatar} alt="img"/>
                </div>
                <div className={style.formContainer}>
                    <form >
                        <label >Nickname</label>
                        <h1>Hello,  {userName}!</h1>
                        <span>Front-end-developer</span>
                    </form>
                </div>
                <div className={style.btnContainer}>
                    <NavLink to={PATH.EDIT_PROFILE}><SuperButton className={style.btn}>Edit profile</SuperButton></NavLink>

                    {/*<button className={style.btnDise}>Cancel</button>*/}
                    {/*<button className={style.btn}>Save</button>*/}
                </div>
            </div>

            {/*<span>ProfilePage</span>*/}
            {/*<div>*/}
            {/*    <img src={userAvatar} alt="img"/>*/}
            {/*</div>*/}
            {/*<h3>{userName}</h3>*/}
            {/*<span>Front-end-developer</span>*/}
            {/*<div>*/}
            {/*    <NavLink to={PATH.EDIT_PROFILE}><SuperButton>Edit profile</SuperButton></NavLink>*/}
            {/*</div>*/}
        </div>
    );
};


