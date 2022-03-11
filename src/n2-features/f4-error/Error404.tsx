import React from 'react';
import s from './Error404.module.css'

export function Error404() {
    return (
        <div className={s.errorBlock}>
            <img src={'https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png'} alt={'404'}/>
            <div>Страница не найдена!</div>
        </div>
    )
}


