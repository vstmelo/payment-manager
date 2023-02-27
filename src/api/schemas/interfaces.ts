import { NavigateFunction } from "react-router-dom";

export interface ILogin {
    email: string;
    password: string
}

export interface ISign {
    email: string;
    password: string;
    navigate: NavigateFunction;
}

export interface TypeContext {
    user: Object;
    isAuthenticated: boolean;

    SignIn: ({ email, password, navigate }: ISign) => void;

    Logout: ( navigate: NavigateFunction) => void;
}

export interface Clients{
    email?: string;
    username: string;
    phone?: string;
    cep?: string;
}

export interface User{
    username: string;
    email?: string;
    phone?: string;
}