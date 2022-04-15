import React, {ChangeEvent, useState} from 'react';
import s from './CardsSearch.module.css'
import {useDispatch} from 'react-redux';
import {setFilteredCardsAC} from '../../../m2-bll/b1-reducers/cardReducer';

export const CardsSearch = () => {
    const dispatch = useDispatch()

    let [event, setEvent] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEvent(e.currentTarget.value)

    };
    let onClickHandler = () => {
        dispatch(setFilteredCardsAC(event));
    }
    return (
        <div className={s.wrap}>
            <input
                type="text"
                placeholder="Search..."
                value={event}
                onChange={handleChange}
            />
            <button onClick={onClickHandler} className={s.btnSearch}></button>
        </div>
    );
}