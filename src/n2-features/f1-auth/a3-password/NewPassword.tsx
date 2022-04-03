import React from 'react';
import style from '../../../n1-main/m1-ui/styles/Login.module.css';

export const NewPassword = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h1>Forgot</h1>
                </div>
                <div className={style.subtitle}>
                    <h2> Forgot your password?</h2>
                </div>
                <div>
                    <form >
                        <label >Email</label>
                        <input type="email"/>
                        <h4 style={{color:'black', marginTop:'0px'}}>Enter your email address and we will send you further instructions</h4>
                        <div className={style.btnContainer} style={{marginTop:'95px'}} >
                            <button className={style.btn} style={{width:'200px'}}>Send Instructions</button>
                        </div>
                    </form>
                </div>
                <div className={style.hContainer}>
                    <h4 style={{color:'black'}}>Did you remember your password?</h4>
                </div>
                <div className={style.aContainer}>
                    <a href='#' className={style.linkUp}>Try logging in</a>
                </div>
            </div>
        </div>
    );
};

