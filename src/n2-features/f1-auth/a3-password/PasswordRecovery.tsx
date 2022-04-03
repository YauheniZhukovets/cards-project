import React from 'react';
import style from '../../../n1-main/m1-ui/styles/Login.module.css';

export const PasswordRecovery = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h1>Set Password</h1>
                </div>
                <div className={style.subtitle}>
                    <h2> Create new password</h2>
                </div>
                <div>
                    <form >
                        <label >Password</label>
                        <a href='#'><input className={style.eyes} type="password"/></a>
                        <h4 style={{color:'black', marginTop:'0px'}}>Create new password and we will send you further instructions to email</h4>
                        <div className={style.btnContainer} style={{marginTop:'95px'}} >
                            <button className={style.btn} style={{width:'200px'}}>Create new password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
