import React from 'react';
import SuperInputText from '../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText';
import SuperCheckbox from '../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {useFormik} from 'formik';
import {Navigate, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';
import {loginTC} from '../../../n1-main/m2-bll/b1-reducers/loginReducer';

export const Login = () => {
    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const statusText = useSelector<AppStoreType, string>(state => state.login.status)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Password length must be more than 8 characters';
            }
            return errors;
        },
        onSubmit: (values) => {
            /* alert(JSON.stringify(values));*/
            /*formik.resetForm()*/
            dispatch(loginTC(values))
        },
    })

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            <div>
                <p>To log in get registered or use common test account credentials:</p>
                <p><b>Email</b>: nya-admin@nya.nya</p>
                <p><b>Password</b>: 1qazxcvBG</p>
            </div>
            <div>
                <h1>Sign in</h1>
                {statusText === 'loading' ? <div style={{color: 'orange'}}>loading...</div>
                    : statusText === 'success' ? <div style={{color: 'lime'}}>Success!</div>
                        : statusText ? <div style={{color: 'red'}}>{statusText}</div>
                            : <div><br/></div>}
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    email:
                    <SuperInputText type={'email'}
                                    placeholder={'Enter your email'}
                                    {...formik.getFieldProps('email')}
                                    error={formik.touched.email ? formik.errors.email : ''}
                    />
                </div>
                <div>
                    password:
                    <SuperInputText type={'password'}
                                    placeholder={'Enter your password'}
                                    {...formik.getFieldProps('password')}
                                    error={formik.touched.password ? formik.errors.password : ''}
                    />
                </div>
                <div>
                    <NavLink to={PATH.PASSWORD_RECOVERY}>Forgot password</NavLink>
                </div>
                <div>
                    <SuperCheckbox type={'checkbox'}
                                   {...formik.getFieldProps('rememberMe')}
                    >
                        Remember me:
                    </SuperCheckbox>
                </div>
                <div>
                    <SuperButton type={'submit'}
                    >
                        Login
                    </SuperButton>
                </div>
            </form>
            <div>
                <div>
                    <NavLink to={PATH.REGISTRATION}>Sign up</NavLink>
                </div>

            </div>
        </div>
    );
};
