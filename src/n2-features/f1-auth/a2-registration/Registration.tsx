import React from 'react';
import style from '../../../n1-main/m1-ui/styles/Login.module.css';

export const Registration = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h1>Register</h1>
                </div>
                <div className={style.subtitle}>
                    <h2> Sing Up</h2>
                </div>
                <div>
                    <form >
                        <label >Email</label>
                        <input type="email"/>
                        <label >Password</label>
                        <a href='#'><input className={style.eyes} type="password"/></a>
                        <label >Confirm password</label>
                        <a href='#'><input className={style.eyes} type="password"/></a>
                    </form>
                </div>
                <div className={style.btnContainer}>
                    <button className={style.btnDise}>Cancel</button>
                    <button className={style.btn}>Register</button>
                </div>
            </div>
        </div>
    );
};

