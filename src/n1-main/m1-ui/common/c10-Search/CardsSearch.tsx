import React, {ChangeEvent, useState} from 'react';
import s from './PackSearch.module.css'

export const CardsSearch = () => {

    let [event, setEvent] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEvent(e.currentTarget.value)

    };
    let onClickHandler = () => {
        /*      dispatch(setFilterReducerAC(event));dispatch(changeCurrentPageCardsAC(1))*/
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