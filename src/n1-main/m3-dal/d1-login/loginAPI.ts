import {instance} from '../instance';
import {AxiosResponse} from 'axios';

export const LoginAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<UserType>>(`auth/login/`, data);
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date | null;
    updated: Date | null;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string,
}


