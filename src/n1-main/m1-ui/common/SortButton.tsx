import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { Button } from 'a1-main/m1-ui/components/common/CustomButton/Button';
import { AppRootState } from 'a1-main/m2-bll/store';
import {
  EIGHTH_ELEMENT,
  FIFTH_ELEMENT,
  FIRST_ELEMENT,
  FOURTH_ELEMENT,
  NINTH_ELEMENT,
  SECOND_ELEMENT,
  SEVENTH_ELEMENT,
  SIXTH_ELEMENT,
  TENTH_ELEMENT,
  THIRD_ELEMENT,
} from 'constants/common';
import style from 'styles/Button.module.scss';
import s from 'styles/Table.module.scss';
import { ReturnComponentType } from 'types/ReturnComponentType';

type SortButtonType = {
  elementOne: string;
  elementTwo: string;
  sortFunction: (value: string) => void;
};

const nameSpace = [
  '0user_name',
  '1user_name',
  '0name',
  '1name',
  '0cardsCount',
  '1cardsCount',
  '0updated',
  '1updated',
  '0rating',
  '1rating',
];

export const SortButton: FC<SortButtonType> = ({
  elementOne,
  elementTwo,
  sortFunction,
}): ReturnComponentType => {
  const sortMode = useSelector<AppRootState, string>(state => state.cardspack.sortPacks);
  const buttonRefOne: Array<any> = [];
  const buttonRefTwo: Array<any> = [];
  if (
    elementOne === nameSpace[FIRST_ELEMENT] &&
    elementTwo === nameSpace[SECOND_ELEMENT]
  ) {
    buttonRefOne.push(nameSpace[FIRST_ELEMENT]);
    buttonRefTwo.push(nameSpace[SECOND_ELEMENT]);
  } else if (
    elementOne === nameSpace[THIRD_ELEMENT] &&
    elementTwo === nameSpace[FOURTH_ELEMENT]
  ) {
    buttonRefOne.push(nameSpace[THIRD_ELEMENT]);
    buttonRefTwo.push(nameSpace[FOURTH_ELEMENT]);
  } else if (
    elementOne === nameSpace[FIFTH_ELEMENT] &&
    elementTwo === nameSpace[SIXTH_ELEMENT]
  ) {
    buttonRefOne.push(nameSpace[FIFTH_ELEMENT]);
    buttonRefTwo.push(nameSpace[SIXTH_ELEMENT]);
  } else if (
    elementOne === nameSpace[SEVENTH_ELEMENT] &&
    elementTwo === nameSpace[EIGHTH_ELEMENT]
  ) {
    buttonRefOne.push(nameSpace[SEVENTH_ELEMENT]);
    buttonRefTwo.push(nameSpace[EIGHTH_ELEMENT]);
  } else if (
    elementOne === nameSpace[NINTH_ELEMENT] &&
    elementTwo === nameSpace[TENTH_ELEMENT]
  ) {
    buttonRefOne.push(nameSpace[NINTH_ELEMENT]);
    buttonRefTwo.push(nameSpace[TENTH_ELEMENT]);
  }

  const appStatus = useSelector<AppRootState, boolean>(state => state.app.status);

  return (
    <div className={s.sortButtonContainer}>
      <Button
        id={buttonRefOne[FIRST_ELEMENT]}
        className={`${style.sortButton}${
          sortMode === buttonRefOne[FIRST_ELEMENT] ? ` ${style.sortButtonActive}` : ''
        }`}
        type="button"
        onClick={() => sortFunction(elementOne)}
        disabled={appStatus}
      >
        &#129045;
      </Button>
      <Button
        id={buttonRefTwo[FIRST_ELEMENT]}
        className={`${style.sortButton}${
          sortMode === buttonRefTwo[FIRST_ELEMENT] ? ` ${style.sortButtonActive}` : ''
        }`}
        type="button"
        onClick={() => sortFunction(elementTwo)}
        disabled={appStatus}
      >
        &#129047;
      </Button>
    </div>
  );
};
