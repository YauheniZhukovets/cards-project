import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import s from "./Pagination.module.css";

type PropsType = {
    currentPage?: any
    currentPageSize?: any
    totalPacks?: any
    changePaginationValue?: any
}
export const Selector = (props: PropsType) => {
    const [currentPageSize, setCurrentPageSize] = useState(props.currentPageSize)
    const dispatch = useDispatch()

    const changePageSize = (value: string) => {
        setCurrentPageSize(Number(value))
    }

    const changePage = (page: number, pageSize: number) => {
        dispatch(props.changePaginationValue(page, pageSize))
    }

    useEffect(() => {
        changePage(props.currentPage, currentPageSize)
    }, [currentPageSize])

    return (
        <div className={s.selectMainContainer}>
            <div>
                Show
            </div>
            <select className={s.select}
                    onChange={(e) =>
                        changePageSize(e.currentTarget.value)}
            >
                <option className={s.selectOption} value={5}>5
                </option>
                <option className={s.selectOption} value={10}>10
                </option>
                <option className={s.selectOption} value={15}>15
                </option>
                <option className={s.selectOption} value={20}>20
                </option>
                <option className={s.selectOption} value={25}>25
                </option>
                <option className={s.selectOption} value={50}>50
                </option>
                <option className={s.selectOption} value={100}>100
                </option>
            </select>
            <div>
                Cards per Page
            </div>
        </div>
    )
}