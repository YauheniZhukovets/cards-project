import React from 'react';
import style from "../../n1-main/m1-ui/styles/Login.module.css";
import avatar from "../f3 -profile/coolboy.png";
const avatarIcon = [
    { url: `${avatar}` },
];
export const Profile = () => {
    const imageAva = {
        backgroundImage: `url(${avatar})`,
    }
    return (
        <div className={style.mainContainer}>
            <div className={style.container_log} >
                <div className={style.title} >
                    <h2>Personal Information</h2>
                </div>
                <div>
                    <form >
                        <div className={style.imgAvatar} style={imageAva}></div>
                        <label >Nickname</label>
                        <input type="text"/>
                        <label >Email</label>
                        <input type="email"/>
                    </form>
                </div>
                <div className={style.btnContainer}>
                    <button className={style.btnDise}>Cancel</button>
                    <button className={style.btn}>Save</button>
                </div>
            </div>
        </div>
    );
};

