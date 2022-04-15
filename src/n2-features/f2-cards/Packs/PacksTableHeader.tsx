import packsS from './PacksListTable.module.css';
/*import s from "../../../../../f1-main/m1-ui/components/common/table/cardsListTable.module.css";*/
import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {setPacksSortAC} from '../../../n1-main/m2-bll/b1-reducers/packReducer';

export const PacksTableHeader = () => {
    const dispatch = useDispatch();

    const [nameSortValue, setNameSortValue] = useState<'0name' | '1name'>('0name');
    const [cardsValue, setCardsValue] = useState<'0cardsCount' | '1cardsCount'>('0cardsCount');
    const [lastUpdatedValue, setLastUpdatedValue] = useState<'0updated' | '1updated'>('0updated');

    const nameSortHandler = useCallback(() => {
        if (nameSortValue === '1name') {
            setNameSortValue(() => '0name');
        } else {
            setNameSortValue(() => '1name');
        }
        dispatch(setPacksSortAC(nameSortValue));
    }, [dispatch, nameSortValue]);

    const cardsSortHandler = useCallback(() => {
        if (cardsValue === '1cardsCount') {
            setCardsValue(() => '0cardsCount');
        } else {
            setCardsValue(() => '1cardsCount');
        }
        dispatch(setPacksSortAC(cardsValue));
    }, [dispatch, cardsValue]);

    const lastUpdatedHandler = useCallback(() => {
        if (lastUpdatedValue === '1updated') {
            setLastUpdatedValue(() => '0updated');
        } else {
            setLastUpdatedValue(() => '1updated');
        }
        dispatch(setPacksSortAC(lastUpdatedValue));
    }, [dispatch, lastUpdatedValue]);

    return (
        <div
            className={packsS.tableHeaderWrapper}
        >
            <div
                className={packsS.tableHeader}
            >
                <div
                    onClick={nameSortHandler}
                    /*className={s.tableLine}*/
                >
                    Name
                </div>
                <div
                    onClick={cardsSortHandler}
                     /*className={s.tableLine}*/
                >
                    Cards
                </div>
                <div
                    onClick={lastUpdatedHandler}
                  /*  className={s.tableLine}*/
                >
                    Last Updated
                </div>
                <div
                 /*   className={s.tableLine}*/
                >Actions
                </div>
            </div>
        </div>
    );
};
