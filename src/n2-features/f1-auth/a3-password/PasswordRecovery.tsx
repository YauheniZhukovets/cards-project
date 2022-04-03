import React from 'react';
import style from '../../../n1-main/m1-ui/styles/Login.module.css';

export const PasswordRecovery = () => {
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

        // <div>
        //     <div className={style.container_log} >
        //         <h2 className={style.title} style={{color:'black'}}>IT-incubator</h2>
        //         <h2 className={style.subtitle} style={{color:'black'}}> Create new password</h2>
        //
        //         <input type="rmail"/><span style={{color:'black'}}>Create new password and we will send you further instructions to email</span>
        //         <button>Create new password</button>
        //
        //     </div>
        // </div>
    );
};
