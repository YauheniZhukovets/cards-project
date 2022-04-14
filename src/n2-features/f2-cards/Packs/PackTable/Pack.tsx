import React from 'react';
import {PackType} from '../../../../n1-main/m3-dal/m1-API/packsAPI';
import {useSelector} from 'react-redux';
import {Loading} from '../../../../n1-main/m1-ui/common/c0-Preloder/Loading';
import {AppStoreType} from '../../../../n1-main/m2-bll/store';
import {AppStatusType} from '../../../../n1-main/m2-bll/b1-reducers/appReducer';
import s from './Pack.module.css'

type PackPropsType = {
    pack: PackType
}

export const Pack: React.FC<PackPropsType> = ({pack}) => {
    /*const dispatch = useDispatch()*/
    const status = useSelector<AppStoreType, AppStatusType>(state => state.app.status)
    const myUserId = useSelector<AppStoreType, string | undefined>(state => state.login.user?._id)

    if (status === 'loading') {
        return <Loading/>
    }

    return (
        <div className={s.item}>
            <div className={s.nameItem}>{pack.user_name}</div>
            <div className={s.cardsCount}>{pack.cardsCount}</div>
            <div className={s.updated}>{pack.updated.slice(0, 10)}</div>
            <div className={s.buttons}>{myUserId === pack.user_id && <>
                <button>Delete</button>
                <button>Edit</button>
            </>}
            </div>
        </div>
    );
};
