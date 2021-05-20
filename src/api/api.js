import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    headers: {
        "API-KEY": "abb8171d-3b1d-4668-92be-94602855208a"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        /*if (props.users.length === 0)*/
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => {
            return response.data;
        });
    },

    deleteUsers (id) {
        return instance.delete(`/follow/${id}`, {}).then(response => {
            return response.data;
        });
    },

    postUsers (id) {
        return instance.post(`/follow/${id}`, {}, {})
            .then(response => {
                return response.data;
            });
    }
}


