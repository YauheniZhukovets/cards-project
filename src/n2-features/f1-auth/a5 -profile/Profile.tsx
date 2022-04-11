import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate, NavLink} from 'react-router-dom';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {logoutTC} from '../../../n1-main/m2-bll/b1-reducers/loginReducer';
import style from '../../../n1-main/m1-ui/styles/Profile.module.css';
import { Search } from '../a7-search/Search';
import SuperRadio from "../../../n1-main/m1-ui/common/c6-SuperRadio/SuperRadio";
import {PaginationSelect} from "../a8-selector/PaginationSelect";
import {DoubleRange} from "../a8-selector/doubleRange/DoubleRange";

// import {
//     changePaginationValue,
//     fetchPacksTC,
// } from "../../../n1-main/m2-bll/reducers/packsReducer/packsReducer";
// import {
//     appStatusSelector,
//     isLoggedInSelector,
//     maxSelector,
//     minSelector,
//     packNameSelector,
//     selectCurrentPage,
//     selectPageSize,
//     selectTotalPacksCount,
//     sortByPacksSortValueSelector,
//     sortedPackValueSelector,
// } from "../../../n1-main/m2-bll/selectors/selectAppStatus";


export const Profile = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const userName = useSelector<AppStoreType, string | undefined>(state => state.login.user?.name)
    const userAvatar = useSelector<AppStoreType, string | undefined>(state => state.login.user?.avatar)

    const onClickLogoutHandler = () => {
        dispatch(logoutTC())
    }

    // const pageSize = useSelector(selectPageSize);
    // const currentPage = useSelector(selectCurrentPage);
    // const totalPacks = useSelector(selectTotalPacksCount);

    if (!isLoggedIn) return <Navigate to={PATH.LOGIN}/>

    return (
        <div className={style.mainContainer}>
            <div className={style.container_log}>
                <div className={style.title}>
                    <h2>ProfilePage</h2>
                </div>
                <div className={style.blockAvatar}>
                    <div className={style.imgAvatar}>
                        <img className={style.img} src={userAvatar} alt="img"/>
                    </div>
                    <div className={style.avatarUrl}>
                        <div><b>Nickname</b></div>
                        <h3>{userName}</h3>
                        <h3>Front-end-developer</h3>
                    </div>
                    <div className={style.btnContainer}>
                        <NavLink to={PATH.EDIT_PROFILE}><SuperButton className={style.btn}>Edit
                            profile</SuperButton></NavLink>
                        <SuperButton className={style.btn} onClick={onClickLogoutHandler}>Log Out</SuperButton>
                    </div>
                    <DoubleRange/>
                    {/*<SuperRadio/>*/}
                </div>
                <div className={style.wrapper}>
                    <Search/>
                    <div className={style.pagination}>

                    </div>
                    {/*<PaginationSelect  pageSize={pageSize}*/}
                    {/*                   currentPage={currentPage}*/}
                    {/*                   totalPacks={totalPacks}*/}
                    {/*                   changePaginationValue={changePaginationValue}/>*/}
                </div>

            </div>
        </div>
    );
};


