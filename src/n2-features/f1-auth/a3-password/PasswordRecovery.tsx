import React from 'react';
import style from "../a2-registration/Login.module.css";

export const PasswordRecovery = () => {
    return (
        <div>
            <div className={style.container_log} >
                <h2 className={style.title} style={{color:'black'}}>IT-incubator</h2>
                <h2 className={style.subtitle} style={{color:'black'}}> Create new password</h2>

                <input type="rmail"/><span style={{color:'black'}}>Create new password and we will send you further instructions to email</span>
                <button>Create new password</button>

            </div>
        </div>
    );
};
