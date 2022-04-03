import React from 'react';
import style from './Login.module.css'
export const Login = () => {
    return (
        <div>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h2>Login</h2>
                </div>
                <div className={style.subtitle}>
                    <h2> Sing in</h2>
                </div>
                <div>
                    <form >
                        <label >Email</label>
                        <input type="email"/>
                        <label >Password</label>
                        <a ><input className={style.eyes} type="password"/></a>
                        <span style={{color:'black'}}><input type="checkbox"/>remenber me</span>
                        {/*<div className={style.inputEmail}>*/}
                        {/*    <span>Email<input type="email"/></span>*/}
                        {/*</div>*/}
                        {/*<div className={style.inputPass}>*/}
                        {/*    <span>Password<input type="password"/></span>*/}
                        {/*</div>*/}
                        {/*<span style={{color:'black'}}><input type="checkbox"/>remenber me</span>*/}
                        {/*<a>Forgot Password?</a>*/}
                        {/*<button>Login</button>*/}
                        {/*<h4 style={{color:'black'}}>Don't have an account?</h4>*/}

                    </form>
                </div>


            </div>
        </div>
    );
};
