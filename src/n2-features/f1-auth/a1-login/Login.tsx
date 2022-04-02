import React from 'react';
import style from './Login.module.css'
export const Login = () => {
    return (
        <div>
            <div className={style.container_log} >
                <h2 className={style.title} style={{color:'black'}}>IT-incubator</h2>
                <h2 className={style.subtitle} style={{color:'black'}}> Sing in</h2>
                <input type="text"/>
                <input type="text"/>
                <input type="checkbox"/><span style={{color:'black'}}>remenber me</span>
                <a>Forgot Password?</a>
                <button>Login</button>
                <h4 style={{color:'black'}}>Don't have an account?</h4>
            </div>
        </div>
    );
};
