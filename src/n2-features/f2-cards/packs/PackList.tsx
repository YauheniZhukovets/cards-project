import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addPackTC,
    changeCurrentPageAC,
    fetchPacksTC,
    MyPackType,
    setPageCountAC
} from '../../../n1-main/m2-bll/b1-reducers/packReducer';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {Navigate} from 'react-router-dom';
import {Header} from '../../../n1-main/m1-ui/heder/Header';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';

import {PackType} from '../../../n1-main/m3-dal/m1-API/packsAPI';
import style from '../../../n1-main/m1-ui/styles/PackPage.module.css';
import {PacksTable} from './packsTable/PacksTable';
import {PacksSearch} from '../../../n1-main/m1-ui/common/c10-Search/PacksSearch';
import {Pagination} from '../../../n1-main/m1-ui/common/c12-Pagination/Pagination';
import {PageSizeSelector} from '../../../n1-main/m1-ui/common/c11-PageSizeSelector/PageSizeSelector';
import {Sidebar} from '../../../n1-main/m1-ui/sidebar/Sidebar';


export const PackList = () => {
    const dispatch = useDispatch()
    const packs = useSelector<AppStoreType, PackType []>(state => state.packs.cardPacks)
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const myPacks = useSelector<AppStoreType, MyPackType>(state => state.packs.myPacks)
    const page = useSelector<AppStoreType, number>(state => state.packs.page)
    const packName = useSelector<AppStoreType, string>(state => state.packs.packName)
    const cardPacksTotalCount = useSelector<AppStoreType, number>(state => state.packs.cardPacksTotalCount)
    const pageCount = useSelector<AppStoreType, number>(state => state.packs.pageCount)
    const sortPack = useSelector<AppStoreType, string>(state => state.packs.sortPacks)


    useEffect(() => {
        dispatch(fetchPacksTC())
    }, [dispatch, myPacks, page, packName, pageCount, sortPack])

    const onClickAddNewPackHandler = () => {
        dispatch(addPackTC('!!!!New pack!!!'))
    }

    const onChangedPage = (newPage: number) => {
        if (newPage !== page) dispatch(changeCurrentPageAC(newPage))
    }

    const pageSizeHandler = (value: number) => {
        dispatch(setPageCountAC(value))
    }

    if (!isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div>
            <Header/>
            <div className={style.mainContainer}>
                <div className={style.container_log}>
                    <div className={style.blockAvatar}>
                        <div className={style.avatarUrl}>
                            <h2>Show Cards Packs</h2>
                            <Sidebar/>
                        </div>
                        <div className={style.descriptionForDoubleRangeSlider}>Cards count in a pack</div>
                        <div className={style.DoubleRangeSliderContainer}>
                            {/*<SuperDoubleRange/>*/}
                        </div>
                    </div>
                    <div className={style.packsBlock}>
                        <h1 className={style.titleCardsBlock}> Pack list</h1>
                        <div className={style.searchAddBlock}>
                            <PacksSearch/>
                            <SuperButton className={style.btnContainer}
                                         onClick={onClickAddNewPackHandler}>
                                Add new Pack
                            </SuperButton>
                        </div>
                        <div className={style.mainTable}>
                            <PacksTable packs={packs}/>
                            <div className={style.paginationWrapper}>
                                {
                                    cardPacksTotalCount < pageCount
                                        ? <></>
                                        : <>
                                            <Pagination totalCount={cardPacksTotalCount}
                                                        pageSize={pageCount}
                                                        currentPage={page}
                                                        onChangedPage={onChangedPage}
                                            />
                                            <PageSizeSelector pageCount={pageCount}
                                                              handler={pageSizeHandler}
                                            />
                                        </>
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

