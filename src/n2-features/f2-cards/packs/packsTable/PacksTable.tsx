import React from 'react';
import {PackType} from '../../../../n1-main/m3-dal/m1-API/packsAPI';
import {Pack} from './Pack';

export type PacksTablePropsType = {
    packs: PackType []
}

export const PacksTable: React.FC<PacksTablePropsType> = ({packs}) => {




    return (
        <div style={ {height: '440px'} }>
            {packs && packs.map(pack => <Pack key={pack._id} pack={pack}/>)}
        </div>
    );
};
