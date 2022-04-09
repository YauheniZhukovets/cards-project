import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {Login} from '../../../n2-features/f1-auth/a1-login/Login';
import {Error404} from '../../../n2-features/f1-auth/a6-error404/Error404';
import {Registration} from '../../../n2-features/f1-auth/a2-registration/Registration';
import {NewPassword} from '../../../n2-features/f1-auth/a3-newPassword/NewPassword';
import {Profile} from '../../../n2-features/f1-auth/a5 -profile/Profile';
import {EditProfile} from '../../../n2-features/f1-auth/a5 -profile/EditProfile';
import { PacksCardsTable } from '../../../n2-features/f1-auth/a7 -packs-cards/PackCardsTable';
import {CardsTable} from "../../../n2-features/f1-auth/a8 -cards-table/CardsTable";


export const PATH = {
    TEST: '/test',
    LOGIN: '/login',
    REGISTRATION: '/registration',
    NEW_PASSWORD: '/new-password',
    PASSWORD_RECOVERY: '/password-recovery',
    PROFILE: '/profile',
    EDIT_PROFILE: '/edit-profile',
    CARDS:'/packs-cards-table',
    CARDS_TABLE:'/cards-table'
}

export const RoutesRoot = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Profile/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>} />
                <Route path={PATH.PASSWORD_RECOVERY} element={<Error404/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.CARDS} element={<PacksCardsTable />} />
                <Route path={PATH.CARDS_TABLE} element={<CardsTable />} />
                <Route path={PATH.EDIT_PROFILE} element={<EditProfile/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>
        </div>
    );
};
