import React, { ChangeEvent, FC,  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './Search.module.css';
import searchIcon from './search-svgrepo-com.svg';
import {useDebounce} from "use-debounce";
import {searchPacksCardsTC} from "../../../n1-main/m2-bll/b1-reducers/packReducer";
import {useUpdateEffect} from "usehooks-ts";


export type SearchPacksPropsType={

}



export const Search = ({...props}:SearchPacksPropsType) => {
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');
    const deboucedSearchValue = useDebounce<string>(searchValue, 500)
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setSearchValue(e.currentTarget.value)
    }
    useUpdateEffect(() => {
        dispatch(searchPacksCardsTC(searchValue));
    }, [deboucedSearchValue]);

    return (
        <div className={style.searchWrapper}>
            <input placeholder="Search" value={searchValue} onChange={onChangeHandler} />
            <img className={style.searchIcon} src={searchIcon} alt="search_icon" />
        </div>
    );
};


