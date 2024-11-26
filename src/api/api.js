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
    getProfile(setUserProfile, userId){
        return instance.get(`profile/` + userId)
            .then(response => {
                setUserProfile(response.data);
            })
            .catch(error => console.error(error));
    }
}

export const authApi = {
    getAuth(setAuthUserData) {
        return (
            instance.get('auth/me')
                .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data;
                        setAuthUserData(id, email, login);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                })
    )
        ;

    }
}