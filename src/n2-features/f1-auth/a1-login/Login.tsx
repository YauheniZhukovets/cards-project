import React from 'react';
import style from './Login.module.css'
export const Login = () => {
    return (
        <div>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h1>Login</h1>
                </div>
                <div className={style.subtitle}>
                    <h2> Sing in</h2>
                </div>
                <div>
                    <form >
                        <label >Email</label>
                        <input type="email"/>
                        <label >Password</label>
                        <a href='#'><input className={style.eyes} type="password"/></a>
                        <span style={{color:'black'}}><input type="checkbox"/>remenber me</span>
                        <a href='#' className={style.link}>Forgot Password?</a>
                        <div className={style.btnContainer}>
                            <button className={style.btn}>Login</button>
                        </div>
                        <div className={style.hContainer}>
                            <h4 style={{color:'black'}}>Don't have an account?</h4>
                        </div>
                        <div className={style.aContainer}>
                            <a href='#' className={style.linkUp}>Sing Up</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
