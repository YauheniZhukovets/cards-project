import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../../n1-main/m2-bll/store';
import {AppStatusType} from '../../../n1-main/m2-bll/b1-reducers/appReducer';
import {useFormik} from 'formik';
import SuperInputText from '../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import {registrationTC} from '../../../n1-main/m2-bll/b1-reducers/registrationReducer';
import {Navigate} from 'react-router-dom';
import {PATH} from '../../../n1-main/m1-ui/routes/RoutesRoot';

export const Registration = () => {
    type FormikErrorType = {
        email?: string
        password?: string
        confirmPassword?: string
    }

    const dispatch = useDispatch()
    const status = useSelector<AppStoreType, AppStatusType>(state => state.app.status)
    const error = useSelector<AppStoreType, null | string>(state => state.registration.error)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
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
            } else if (values.password.length < 8) {
                errors.password = 'Password length must be more than 8 characters';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Please enter your confirm password.';
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords don\'t match.';
            }
            return errors;
        },
        onSubmit: (values) => {
            /*formik.resetForm()*/
            dispatch(registrationTC(values))
        },
    })

    if (!!error) {
        return <Navigate to={PATH.REGISTRATION}/>
    }
    if (status === 'succeeded') {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <div>

            <div>
                <h1>it-incubator</h1>
                <h2>Sign up</h2>
                {/*   {!!error ? <div style={{color: 'red'}}>{error}</div>
                    : status === 'loading' ? <img  src={preload} style={ {height:'30px'} } alt={'pic'}/>
                        : <div><br/></div>}*/}
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    Email:
                    <SuperInputText type={'email'}
                                    placeholder={'Enter your email'}
                                    {...formik.getFieldProps('email')}
                                    error={formik.touched.email ? formik.errors.email : ''}
                    />
                </div>
                <div>
                    Password:
                    <SuperInputText type={'password'}
                                    placeholder={'Enter your password'}
                                    {...formik.getFieldProps('password')}
                                    error={formik.touched.password ? formik.errors.password : ''}
                    />
                </div>

                <div>
                    Confirm password:
                    <SuperInputText type={'password'}
                                    placeholder={'Enter your confirm password'}
                                    {...formik.getFieldProps('confirmPassword')}
                                    error={formik.touched.confirmPassword ? formik.errors.confirmPassword : ''}
                    />
                </div>
                <div>
                    <SuperButton type={'submit'}
                                 disabled={status === 'loading'}
                    >
                        Sign up
                    </SuperButton>
                </div>
            </form>
        </div>
    );
};