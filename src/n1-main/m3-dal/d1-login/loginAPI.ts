import { instance } from "../instance";

export const LoginAPI = {
    login(data: LoginDataType) {
        return instance.post(`auth/login/`, data);
    }
}

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}
