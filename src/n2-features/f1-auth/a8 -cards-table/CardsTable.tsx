import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { BackArrow } from '../../../n1-main/m1-ui/common/BackArrow/BackArrow';
import { Button } from '../../../n1-main/m1-ui/common/CustomButton/Button';
import { Loader } from '../../../n1-main/m1-ui/common/Loader';
import { CardDelete } from '../../../n1-main/m1-ui/common/Modal/CardDelete';
import { CardUpdate } from '../../../n1-main/m1-ui/common/Modal/CardUpdate';
import { Modal } from '../../../n1-main/m1-ui/common/Modal/Modal';
import { NewCard } from '../../../n1-main/m1-ui/common/Modal/NewCard';
import { Scroll } from '../../../n1-main/m1-ui/common/Scroll/Scroll';
import { Pagination } from '../../../n1-main/m1-ui/components/Pagination/Pagination';
import { UniversalTable } from '../../../n1-main/m1-ui/components/UniversalTable';

import { setCurrentCardPage, SortCardData } from '../../../n1-main/m2-bll/actions/cards-actions';
import {AppRootState, AppStoreType} from '../../../n1-main/m2-bll/store';
import {
  addNewCard,
  deleteCard,
  getCards,
  updateCardData,
} from '../../../n1-main/m2-bll/thunks/cards-thunk';
import { cardsType } from '../../../n1-main/m3-dal/types/cardsType';
import { EMPTY_STRING, PORTION_SIZE, ZERO_LENGTH } from '../../../constants/common';
import { PATH } from '../../../n1-main/m1-ui/routes/RoutesRoot';
import s from 'styles/Cards.module.scss';
import st from 'styles/Search.module.scss';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import {AppStatusType} from "../../../n1-main/m2-bll/b1-reducers/appReducer";

export const CardsTable = (): ReturnComponentType => {
  const appStatus = useSelector<AppStoreType, AppStatusType>(state => state.app.status)
  const AuthUserStatus = useSelector<AppRootState, boolean>(state => state.auth.isAuth);
  // @ts-ignore
  const userId = useSelector<AppRootState, string>(state => state.profile._id);
  const cards = useSelector<AppRootState, cardsType[]>(state => state.cards.cards);
  const cardsTotalCount = useSelector<AppRootState, number>(
    state => state.cards.cardsTotalCount,
  );
  const page = useSelector<AppRootState, number>(state => state.cards.page);
  const pageCount = useSelector<AppRootState, number>(state => state.cards.pageCount);
  const sortCards = useSelector<AppRootState, string>(state => state.cards.sortCards);
  const dispatch = useDispatch();
  const location = useLocation();
  const { packId, packName, userIdOwnerThisPack } = location.state;
  const cardsHeaders = {
    question: 'question',
    answer: 'answer',
    grade: 'grade',
    updated: 'updated',
  };
  const [cardId, setCardId] = useState(EMPTY_STRING);
  const [createCardModal, setCreateCardModal] = useState(false);
  const [updateCardModal, setUpdateCardModal] = useState(false);
  const [deleteCardModal, setDeleteCardModal] = useState(false);

  const handleSortCards = (value: string): void => {
    dispatch(SortCardData(value));
  };
  const handleAddCard = (question: string, answer: string): void => {
    dispatch(addNewCard({ cardsPack_id: packId, question, answer }));
    setCreateCardModal(false);
  };
  const handleDeleteCard = (): void => {
    dispatch(deleteCard(cardId, packId));
    setDeleteCardModal(false);
  };
  const handleUpdateCard = (question: string): void => {
    dispatch(updateCardData(cardId, question, packId));
    setUpdateCardModal(false);
  };
  const onPageChanged = (pageNumber: number): void => {
    dispatch(setCurrentCardPage(pageNumber));
    dispatch(getCards(packId));
    setDeleteCardModal(false);
  };

  useEffect(() => {
    dispatch(getCards(packId));
  }, [sortCards]);

  if (!AuthUserStatus) return <Navigate to={PATH.LOGIN_FORM} />;

  return (
    <div className={s.CardsContainer}>
      <Scroll />
      <div
        className={cards.length === ZERO_LENGTH ? s.cardsBlockWithCards : s.cardsBlock}
      >
        {!appStatus && (
          <div className={s.titleCardsBlock}>
            <BackArrow />
            {cards.length === ZERO_LENGTH ? (
              <div className={s.title}>
                This card pack &quot;{packName}&quot; has no any card
                {userId === userIdOwnerThisPack ? (
                  <span>. You can add a card - click on the Add Card</span>
                ) : (
                  ''
                )}
              </div>
            ) : (
              <div className={s.title}>Card pack &quot;{packName}&quot;</div>
            )}
          </div>
        )}
        <div className={s.loader}>{appStatus && <Loader />}</div>
        <div className={st.searchAddBlock}>
          {userId === userIdOwnerThisPack && !appStatus ? (
            <Button type="button" onClick={() => setCreateCardModal(true)}>
              Add Card
            </Button>
          ) : (
            ''
          )}
        </div>
        {cards.length !== ZERO_LENGTH && (
          <div>
            <UniversalTable
              showDelete={setDeleteCardModal}
              showUpdate={setUpdateCardModal}
              items={cards}
              headers={cardsHeaders}
              sortFunction={handleSortCards}
              setId={setCardId}
              buttons={false}
            />
            <Pagination
              totalItemsCount={cardsTotalCount}
              currentPage={page}
              onPageChanged={onPageChanged}
              pageSize={pageCount}
              portionSize={PORTION_SIZE}
            />
          </div>
        )}
      </div>
      <Modal isOpen={updateCardModal}>
        <CardUpdate showUpdate={setUpdateCardModal} handleUpdateCard={handleUpdateCard} />
      </Modal>
      <Modal isOpen={deleteCardModal}>
        <CardDelete showDelete={setDeleteCardModal} handleDeleteCard={handleDeleteCard} />
      </Modal>
      <Modal isOpen={createCardModal}>
        <NewCard showCreate={setCreateCardModal} handleAddCard={handleAddCard} />
      </Modal>
    </div>
  );
};
