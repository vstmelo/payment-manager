import { api } from "../../../api"

export const getAll = async () => {
    return await api.get(`/user/list`, )

} 