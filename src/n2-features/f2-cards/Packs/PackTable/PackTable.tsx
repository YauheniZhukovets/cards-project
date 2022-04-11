import React from 'react';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../../n1-main/m2-bll/store';
import {PackType} from '../../../../n1-main/m3-dal/m1-API/packsAPI';
import {Pack} from './Pack';

export const PackTable = () => {
    const packs = useSelector<AppStoreType, PackType []>(state => state.packs.cardPacks)

    return (

        <>
            {packs && packs.map(pack => <Pack key={pack._id} pack={pack}/>)}
        </>
    );
};
