import React from 'react';
import style from '../../../n1-main/m1-ui/styles/Login.module.css';
import { loginTC } from '../../../n1-main/m2-bll/b1-reducers/loginReducer';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../n1-main/m2-bll/store";
import {AppStatusType} from "../../../n1-main/m2-bll/b1-reducers/appReducer";
import {useFormik} from 'formik';
import {Navigate, NavLink} from 'react-router-dom';
import preload from '../../../n1-main/m1-ui/common/c0-Preloder/Spinner.svg';
import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from '../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";

export const Login = () => {
    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppStoreType, string | null>(state => state.login.error)
    const status = useSelector<AppStoreType, AppStatusType>(state => state.app.status)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Please enter your email Address.';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Please enter valid email address.';
            }

            if (!values.password) {
                errors.password = 'Please enter your password.';
            } else if (values.password.length < 3) {
                errors.password = 'Password length must be more than 8 characters';
            }
            return errors;
        },
        onSubmit: (values) => {
            /*formik.resetForm()*/
            dispatch(loginTC(values))
        },
    })

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h1>Login</h1>
                </div>
                <div className={style.subtitle}>
                    <h2> Sing in</h2>
                    {!!error ? <div style={{color: '#bd2727'}}>{error}</div>
                        : status === 'loading' ? <img  src={preload} style={ {height:'30px'} } alt={'pic'}/>
                            : <div><br/></div>}

                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <label >Email</label>

                        <SuperInputText type={'email'}
                                        placeholder={'Enter your email'}
                                        {...formik.getFieldProps('email')}
                                        error={formik.touched.email ? formik.errors.email : ''}
                        />

                        {/*<input type={'email'}  placeholder={'Enter your email'}*/}
                        {/*       {...formik.getFieldProps('email')}*/}
                        {/*       error={formik.touched.email ? formik.errors.email : ''}*/}
                        {/*/>*/}
                        <label >Password</label>
                        <SuperInputText type={'password'}
                                        placeholder={'Enter your password'}
                                        {...formik.getFieldProps('password')}
                                        error={formik.touched.password ? formik.errors.password : ''}
                        />
                        {/*<a href='#'><input className={style.eyes} type="password"/></a>*/}
                        <div>
                            <SuperCheckbox type={'checkbox'}
                                           {...formik.getFieldProps('rememberMe')}
                            >
                                remember me
                            </SuperCheckbox>
                        </div>
                        {/*<span style={{color:'black'}}><input type="checkbox"/>remenber me</span>*/}
                        {/*<div >*/}
                            <NavLink to={PATH.PASSWORD_RECOVERY} className={style.link}>Forgot Password?</NavLink>
                        {/*</div>*/}
                        {/*<a href='#' className={style.link}>Forgot Password?</a>*/}
                        <div className={style.btnContainer}>
                            <SuperButton type={'submit'}
                                         disabled={status=== 'loading'}
                            >
                                Login
                            </SuperButton>
                        </div>
                        {/*<div className={style.btnContainer}>*/}
                        {/*    <button className={style.btn}>Login</button>*/}
                        {/*</div>*/}
                        <div className={style.hContainer}>
                            <h4 style={{color:'black'}}>Don't have an account?</h4>
                        </div>
                        <div className={style.aContainer}>
                            {/*<div>*/}
                                <NavLink to={PATH.REGISTRATION} className={style.linkUp}>Sign up</NavLink>
                            {/*</div>*/}
                            {/*<a href='#' className={style.linkUp}>Sing Up</a>*/}
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
