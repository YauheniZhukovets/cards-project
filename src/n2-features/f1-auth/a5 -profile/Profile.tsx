import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate, NavLink} from 'react-router-dom';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import style from '../../../n1-main/m1-ui/styles/Profile.module.css';
import {Header} from '../../../n1-main/m1-ui/heder/Header';
import {DoubleRange} from "../a8-selector/doubleRange/DoubleRange";
import {Search} from "../a7-search/Search";
import {PacksTable} from "../../f2-cards/Packs/packsTable/PacksTable";
import Tilt from 'react-parallax-tilt';
import {PacksTableHeader} from "../../f2-cards/Packs/PacksTableHeader";

export const Profile = () => {
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const userName = useSelector<AppStoreType, string | undefined>(state => state.login.user?.name)
    const userAvatar = useSelector<AppStoreType, string | undefined>(state => state.login.user?.avatar)

    if (!isLoggedIn) return <Navigate to={PATH.LOGIN}/>

    return (
        <div>
            <Header/>
            <div className={style.mainContainer}>
                <div className={style.container_log}>
                    {/*<div className={style.title}>*/}
                    {/*    <h2>ProfilePage</h2>*/}
                    {/*</div>*/}
                    <div className={style.blockAvatar}>
                        <Tilt>
                            <div className={style.imgAvatar}>
                                <img className={style.img} src={userAvatar} alt="img"/>
                            </div>
                        </Tilt>

                        <div className={style.avatarUrl}>
                            <div><b>Nickname</b></div>
                            <h3>{userName}</h3>
                            <h3>Front-end-developer</h3>
                        </div>
                        <div className={style.descriptionForDoubleRangeSlider}>Cards count in a pack</div>
                        <div className={style.DoubleRangeSliderContainer}>
                            <DoubleRange/>
                        </div>
                        <div className={style.btnContainer}>
                            <NavLink to={PATH.EDIT_PROFILE}><SuperButton className={style.btn}>Edit
                                profile</SuperButton></NavLink>
                        </div>
                    </div>
                    <div className={style.packsBlock} >
                        <h1 className={style.titleCardsBlock}>My Packs list</h1>
                        <div className={style.searchAddBlock}>
                            <Search/>
                            <SuperButton className={style.btnContainer}> Add Pack</SuperButton>
                        </div>
                        <div className={style.mainTable}>
                            <PacksTableHeader/>
                            <PacksTable/>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};


