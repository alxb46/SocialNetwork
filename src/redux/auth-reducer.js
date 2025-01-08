import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }

};

export const setAuthUserData = (userId, email, login, isAuthenticated) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuthenticated}
});

export const getAuthUserData = (userId) => (dispatch) =>{
    authApi.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export const login = (email, password, rememberMe) => (dispatch) =>{
    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData());
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export const logout = () => (dispatch) =>{
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export default authReducer;