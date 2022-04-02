import React from 'react';
import style from './Login.module.css'

export const Registration = () => {
    return (
        <div>
            <div className={style.container_log} >
                <h2 className={style.title} style={{color:'black'}}>IT-incubator</h2>
                <h2 className={style.subtitle} style={{color:'black'}}> Sing Up</h2>
                <input type="email"/>
                <input type="password"/>
                <input type="password"/><span style={{color:'black'}}>remenber me</span>
                <button>Cancel</button>
                <button>Register</button>
            </div>
        </div>
    );
};

