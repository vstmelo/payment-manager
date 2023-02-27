import { api } from "../../../api/";

export const login = async (email: string, pass: string) => {
    const data = await api.post(`/users/login`, { email: email, password: pass });
    return data
}