import React from 'react';
import style from "../a2-registration/Login.module.css";

export const NewPassword = () => {
    return (
        <div>
            <div className={style.container_log} >
                <h2 className={style.title} style={{color:'black'}}>IT-incubator</h2>
                <h2 className={style.subtitle} style={{color:'black'}}> Forgot your password?</h2>

                <input type="rmail"/><span style={{color:'black'}}>Enter your email address and we will send you further instructions</span>
                <button>Send Instructions</button>
                <p>Did you remember your password?</p>
                <a>Try logging in</a>
            </div>
        </div>
    );
};

