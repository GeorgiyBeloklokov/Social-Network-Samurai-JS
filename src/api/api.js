import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "abb8171d-3b1d-4668-92be-94602855208a"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        /*if (props.users.length === 0)*/
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => {
            return response.data;
        });
    },

    deleteUsers(id) {
        return instance.delete(`/follow/${id}`, {}).then(response => {
            return response.data;
        });
    },

    postUsers(id) {
        return instance.post(`/follow/${id}`, {}, {})
            .then(response => {
                return response.data;
            });
    },

    /*getProfile(userId) {
        console.warn('Warning - obsolete method. Use profileApi object')
        return profileAPI.getProfile(userId);
    }*/

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/` + userId);
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    },

    savePhoto(photoFile) {
        const formData = new FormData();
formData.append("image", photoFile);
        return instance.put(`profile/photo/`, formData, );
    },

    saveProfile(profile) {
        const formData = new FormData();
formData.append("profile", profile);
        return instance.put(`profile`, profile, );
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    captcha() {
        return instance.get(`security/get-captcha-url`);
    }
}
