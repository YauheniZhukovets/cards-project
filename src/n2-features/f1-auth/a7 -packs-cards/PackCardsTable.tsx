import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Button } from '../../../n1-main/m1-ui/common/CustomButton/Button';
import { Loader } from '../../../n1-main/m1-ui/common/Loader';
import { Modal } from '../../../n1-main/m1-ui/common/Modal/Modal';
import { NewPack } from '../../../n1-main/m1-ui/common/Modal/NewPack';
import { PackDelete } from '../../../n1-main/m1-ui/common/Modal/PackDelete';
import { PackUpdate } from '../../../n1-main/m1-ui/common/Modal/PackUpdate';
import { Scroll } from '../../../n1-main/m1-ui/common/Scroll/Scroll';
import { Pagination } from '../../../n1-main/m1-ui/components/Pagination/Pagination';
import { Search } from '../../../n1-main/m1-ui/components/Search';
import { Sidebar } from '../../../n1-main/m1-ui/components/Sidebar';
import { UniversalTable } from '../../../n1-main/m1-ui/components/UniversalTable';

import {
  setCurrentPageAC,
  setMaxCardsCount,
  setMinCardsCount,
  setSearchText,
  SortPackCardsAC,
} from '../../../n1-main/m2-bll/actions/pack-action';
import { PacksType } from '../../../n1-main/m2-bll/reducers/cardspack-reducer';
import {AppRootState, AppStoreType} from '../../../n1-main/m2-bll/store';
import {
  createPackCardsTC,
  deletePackCardsTC,
  setPackCardsTC,
  updatePackCardsTC,
} from '../../../n1-main/m2-bll/thunks/pack-thunk';
import { searchPacks } from '../../../n1-main/m2-bll/thunks/search-thunk';
import { EMPTY_STRING, FIRST_PAGE, ZERO } from '../../../constants/common';
import { PATH } from '../../../n1-main/m1-ui/routes/RoutesRoot';
import s from 'styles/Cards.module.scss';
import st from 'styles/Search.module.scss';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import {AppStatusType} from "../../../n1-main/m2-bll/b1-reducers/appReducer";

export const PacksCardsTable = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const appStatus = useSelector<AppStoreType, AppStatusType>(state => state.app.status)
  const [allPacks, setAllPacks] = useState<boolean>(true);
  const status = useSelector<AppRootState, boolean>(state => state.app.status);
  const AuthUserStatus = useSelector<AppRootState, boolean>(state => state.auth.isAuth);
  // @ts-ignore
  const userId = useSelector<AppRootState, string>(state => state.profile._id);
  const packCards = useSelector<AppRootState, Array<PacksType>>(
    state => state.cardspack.cardPacks,
  );
  const sortPack = useSelector<AppRootState, string>(state => state.cardspack.sortPacks);
  const cardPacksTotalCount = useSelector<AppRootState, number>(
    state => state.cardspack.cardPacksTotalCount,
  );
  const initialSortValue = '0updated';
  const page = useSelector<AppRootState, number>(state => state.cardspack.page);
  const pageCount = useSelector<AppRootState, number>(state => state.cardspack.pageCount);
  const portionSize = useSelector<AppRootState, number>(
    state => state.cardspack.portionSize,
  );
  const searchText = useSelector<AppRootState, string>(
    state => state.cardspack.searchText,
  );

  const onPageChanged = (pageNumber: number): void => {
    dispatch(setCurrentPageAC(pageNumber));
    if (!searchText) {
      dispatch(setPackCardsTC(EMPTY_STRING));
    } else {
      dispatch(searchPacks(searchText, sortPack, pageCount, pageNumber));
    }
  };

  useEffect(() => {
    if (!AuthUserStatus) {
      return;
    }
    if (!searchText) {
      if (allPacks) {
        dispatch(setPackCardsTC(EMPTY_STRING));
      } else {
        dispatch(setPackCardsTC(userId));
      }
    } else {
      dispatch(searchPacks(searchText, sortPack, pageCount, FIRST_PAGE));
    }
  }, [sortPack]);

  useEffect(() => {
    dispatch(setSearchText(EMPTY_STRING));
    dispatch(setCurrentPageAC(FIRST_PAGE));
    dispatch(setMinCardsCount(ZERO));
    dispatch(setMaxCardsCount(ZERO));
    dispatch(SortPackCardsAC(initialSortValue));
  }, []);

  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [packId, setPackId] = useState(EMPTY_STRING);
  const packHeaders = {
    user_name: 'writer',
    name: 'name',
    cardsCount: 'cards',
    updated: 'updated',
    rating: 'rating',
  };

  const addPackCards = (title: string): void => {
    dispatch(createPackCardsTC(title, userId));
    setCreateModal(false);
    setAllPacks(false);
  };

  const sortPackCards = (value: string): void => {
    dispatch(SortPackCardsAC(value));
  };

  const deletePack = (): void => {
    dispatch(deletePackCardsTC(packId, userId));
    setDeleteModal(false);
  };

  const updatePack = (title: string): void => {
    dispatch(updatePackCardsTC(packId, title, userId));
    setUpdateModal(false);
  };

  const getAllPacks = (): void => {
    dispatch(setPackCardsTC(EMPTY_STRING));
    setAllPacks(true);
  };

  const getMyPacks = (): void => {
    dispatch(setPackCardsTC(userId));
    setAllPacks(false);
  };

  if (!AuthUserStatus) return <Navigate to={PATH.LOGIN_FORM} />;

  return (
    <div className={s.CardsContainer}>
      <Scroll />
      <Sidebar>
        <h1>Show Cards Packs</h1>
        <div className={s.selectPacksButtonsContainer}>
          <div
            className={
              !allPacks ? s.selectPacksButtonActive : s.selectPacksButtonUnActive
            }
          >
            <Button
              type="button"
              disabled={!allPacks || appStatus}
              onClick={getMyPacks}
              className={s.selectPacksButton}
            >
              My
            </Button>
          </div>
          <div
            className={allPacks ? s.selectPacksButtonActive : s.selectPacksButtonUnActive}
          >
            <Button
              type="button"
              disabled={allPacks || appStatus}
              onClick={getAllPacks}
              className={s.selectPacksButton}
            >
              All
            </Button>
          </div>
        </div>
      </Sidebar>
      <div className={s.cardsBlock}>
        <h1 className={s.titleCardsBlock}>Packs list</h1>
        <div className={s.loader}>{status && <Loader />}</div>
        <div className={st.searchAddBlock}>
          <Search userId={allPacks ? EMPTY_STRING : userId} />
          <Button type="button" onClick={() => setCreateModal(true)}>
            Add Pack
          </Button>
        </div>
        <UniversalTable
          items={packCards}
          headers={packHeaders}
          sortFunction={sortPackCards}
          showDelete={setDeleteModal}
          showUpdate={setUpdateModal}
          setId={setPackId}
          buttons
        />
        <Pagination
          totalItemsCount={cardPacksTotalCount}
          currentPage={page}
          onPageChanged={onPageChanged}
          pageSize={pageCount}
          portionSize={portionSize}
        />
      </div>
      <Modal isOpen={updateModal}>
        <PackUpdate showUpdate={setUpdateModal} updatePack={updatePack} />
      </Modal>
      <Modal isOpen={deleteModal}>
        <PackDelete showDelete={setDeleteModal} deletePack={deletePack} />
      </Modal>
      <Modal isOpen={createModal}>
        <NewPack showCreate={setCreateModal} addPack={addPackCards} />
      </Modal>
    </div>
  );
};
