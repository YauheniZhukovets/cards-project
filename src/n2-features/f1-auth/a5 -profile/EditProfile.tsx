import React, {useState} from 'react';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {EditableSpan} from '../../../n1-main/m1-ui/common/c8-EditableSpan/EditableSpan';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate, NavLink} from 'react-router-dom';
import {updateProfileTC} from '../../../n1-main/m2-bll/b1-reducers/profileReducer';
import preload from '../../../n1-main/m1-ui/common/c0-Preloder/Spinner.svg';
import {AppStatusType} from '../../../n1-main/m2-bll/b1-reducers/appReducer';

export const EditProfile = () => {
    const dispatch = useDispatch()
    const userName = useSelector<AppStoreType, string | undefined>(state => state.login.user?.name)
    const userEmail = useSelector<AppStoreType, string | undefined>(state => state.login.user?.email)
    const userAvatar = useSelector<AppStoreType, string | undefined>(state => state.login.user?.avatar)
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppStoreType, string | null>(state => state.login.error)
    const status = useSelector<AppStoreType, AppStatusType>(state => state.app.status)

    const [name, setName] = useState<string | undefined>(userName)
    const [avatar, setAvatar] = useState<string | undefined>(userAvatar)

    const updateNameClickHandler = () => {
        dispatch(updateProfileTC({name, avatar}))
    }

    if (!isLoggedIn) return <Navigate to={PATH.LOGIN}/>

    return (
        <div>
            <div>
                <h2>Personal Information</h2>
                {!!error ? <div style={{color: 'red'}}>{error}</div>
                    : status === 'loading' ? <img src={preload} style={{height: '30px'}} alt={'pic'}/>
                        : <div><br/></div>}
            </div>
            <div>
                <img style={ {width:'100px', borderRadius: '50%'} } alt={'img'} src={userAvatar}/>
                <div><b>Avatar url:</b></div>
                <EditableSpan span={avatar} updateSpan={setAvatar}/>
            </div>
            <br/>
            <div>
                <span><b>NickName:</b></span><EditableSpan span={name} updateSpan={setName}/>
            </div>
            <br/>
            <div>
                <span><b>Email:</b></span>
                <div>{userEmail}</div>
            </div>
            <div>
                <NavLink to={PATH.PROFILE}><SuperButton>Back</SuperButton></NavLink>
                <SuperButton onClick={updateNameClickHandler} disabled={status === 'loading'}>Save</SuperButton>
            </div>
        </div>
    );
};



