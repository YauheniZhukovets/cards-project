import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Button } from '../../components/common/CustomButton/Button';
import { setEmailAC } from '../../../m2-bll/actions/app-actions';
import { setAnswerStatus, setQuestionNumber } from '../../../m2-bll/actions/learn-actions';
import { AppRootState } from '../../../m2-bll/store';
import { deleteAuthUserData } from '../../../m2-bll/thunks/auth-thunk';
import { ZERO } from '../../../../constants/common';
import { PATH } from '../../../../enums/routes';
import style from '../../../../styles/Header.module.scss';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

export const Header = (): ReturnComponentType => {
  const appStatus = useSelector<AppRootState, boolean>(state => state.app.status);
  const AuthUserStatus = useSelector<AppRootState, boolean>(state => state.auth.isAuth);
  const isFetching = useSelector<AppRootState, boolean>(state => state.app.isFetching);
  const dispatch = useDispatch();

  const logOut = (): void => {
    dispatch(deleteAuthUserData());
    dispatch(setEmailAC(''));
    dispatch(setQuestionNumber(ZERO));
    dispatch(setAnswerStatus(false));
  };

  const handleClick = (event: any): void => {
    if (appStatus) {
      event.preventDefault();
    }
  };

  return (
    <div className={`${style.header} ${!AuthUserStatus && style.headerWithoutAuth}`}>
      <div className={style.headerContainer}>
        <h1 className={style.title}>Playing Cards</h1>
        {AuthUserStatus && (
          <div className={style.headerBlock}>
            <div className={style.itemMenu}>
              <NavLink
                onClick={handleClick}
                to={PATH.PROFILE}
                className={({ isActive }) => (isActive ? style.active : '')}
              >
                Profile
              </NavLink>
            </div>
            <div className={style.itemMenu}>
              <NavLink
                onClick={handleClick}
                to={PATH.CARDS}
                className={({ isActive }) => (isActive ? style.active : '')}
              >
                Packs List
              </NavLink>
            </div>
            <div className={style.logout}>
              <Button onClick={logOut} disabled={isFetching}>
                Log out
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
