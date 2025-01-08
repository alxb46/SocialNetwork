import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "5ae46dee-bde3-4f59-bcb7-42ce831bc0cb"
    }
})

export const usersApi = {
    getUsers(currentPage = 1 , pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },
    follow(userId){
        return (
            instance.post(`follow/${userId}`)
        );
    },
    unfollow(userId){
       return (
           instance.delete(`follow/${userId}`)
       );
    }
}

export const profileApi = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        //debugger;
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        debugger;
        return instance.put(`profile/status`, {status: status});
    }
}

export const authApi = {
    getAuth() {
        return (instance.get('auth/me'));
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
}