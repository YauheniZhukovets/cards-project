import React from 'react';
import style from "../../n1-main/m1-ui/styles/Login.module.css";
import avatar from "../f3 -profile/coolboy.png";
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

// import preload from '../../../n1-main/m1-ui/common/c0-Preloder/Spinner.svg';
import {AppStoreType} from '../../n1-main/m2-bll/store';
import {UserResponseType} from '../../n1-main/m3-dal/m1-API/loginAPI';
import {PATH} from '../../n1-main/m1-ui/routes/RoutesRoot';



const avatarIcon = [
    { url: `${avatar}` },
];
//test
export const Profile = () => {
    const imageAva = {
        backgroundImage: `url(${avatar})`,
    }

    const isLoggedIn = useSelector<AppStoreType, boolean>(state => state.login.isLoggedIn)
    const user = useSelector<AppStoreType, UserResponseType | null>(state => state.login.user)

    if (!isLoggedIn) return <Navigate to={PATH.REGISTRATION}/>

    if (!user) return <Navigate to={PATH.REGISTRATION}/>

    // type FormikErrorType = {
    //     email?: string
    //     text?: string
    //
    // }
    //
    // const dispatch = useDispatch()
    // const status = useSelector<AppStoreType, AppStatusType>(state => state.app.status)
    // const error = useSelector<AppStoreType, null | string>(state => state.registration.error)
    // const formik = useFormik({
    //     initialValues: {
    //         email: '',
    //         text: '',
    //     },
    //     validate: (values) => {
    //         const errors: FormikErrorType = {};
    //         if (!values.email) {
    //             errors.email = 'Please enter your email Address.';
    //         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //             errors.email = 'Please enter valid email address.';
    //         }
    //
    //         if (!values.text) {
    //             errors.text = 'Please enter your Nickname.';
    //         } else if (values.text.length < 2) {
    //             errors.text= 'Nickname length must be more than 2 characters';
    //         }
    //         return errors;
    //     },
    //     onSubmit: (values) => {
    //         /*formik.resetForm()*/
    //         dispatch(registrationTC(values))
    //     },
    // })
    //
    // if (!!error) {
    //     return <Navigate to={PATH.PROFILE}/>
    // }
    // if (status === 'succeeded') {
    //     return <Navigate to={PATH.LOGIN}/>
    // }
    return (
        <div className={style.mainContainer}>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h2>Personal Information</h2>
                    {/*{!!error ? <div style={{color: 'red'}}>{error}</div>*/}
                    {/*    : status === 'loading' ? <img  src={preload} style={ {height:'30px'} } alt={'pic'}/>*/}
                    {/*        : <div><br/></div>}*/}
                </div>
                <div>
                    <form >
                        <div className={style.imgAvatar} style={imageAva}>

                            {/*<img src={user.avatar} alt="img"/>*/}
                        </div>
                        <label >Nickname</label>
                        <h1>Hello {user.name}!</h1>

                        {/*<SuperInputText type={'text'}*/}
                        {/*                placeholder={'Enter your Nickname'}*/}
                        {/*                {...formik.getFieldProps('text')}*/}
                        {/*                error={formik.touched.text ? formik.errors.text : ''}*/}
                        {/*/>*/}

                        <input type="text"/>
                        <label >Email</label>

                        {/*<SuperInputText type={'email'}*/}
                        {/*                placeholder={'Enter your email'}*/}
                        {/*                {...formik.getFieldProps('email')}*/}
                        {/*                error={formik.touched.email ? formik.errors.email : ''}*/}
                        {/*/>*/}

                        <input type="email"/>
                    </form>
                </div>
                <div className={style.btnContainer}>
                    {/*<SuperButton type={'submit'} style={{background:'rgba(235, 235, 235, 0.66)', color:'#130d0d'}}*/}
                    {/*             disabled={status === 'loading'}*/}
                    {/*>*/}
                    {/*    Cancel*/}
                    {/*</SuperButton>*/}
                    {/*<SuperButton type={'submit'}*/}
                    {/*             disabled={status === 'loading'}*/}
                    {/*>*/}
                    {/*    Save*/}
                    {/*</SuperButton>*/}

                    <button className={style.btnDise}>Cancel</button>
                    <button className={style.btn}>Save</button>
                </div>
            </div>
        </div>
    );
};

