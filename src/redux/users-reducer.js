const FOLLOW = 'ADD_POST';
const UNFOLLOW = 'UPDATE_NEW_POST_TEXT';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:[
        /*
        {
            id: 1,
            fullName: 'Alex',
            status: 'I`m a frontend developer',
            location: {city:'Odesa', country:'Ukraine'},
            followed: false,
            imgUrl: 'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/02LD0JTY.png'
        },
        {
            id: 2,
            fullName: 'Dmitriy',
            status: 'I`m a backend developer',
            location: {city:'LA', country:'USA'},
            followed: true,
            imgUrl: 'https://castingfrontier.com/wp-content/uploads/2021/03/shutterstock_1439469431-scaled.jpg'
        },
        {
            id: 3,
            fullName: 'Roman',
            status: 'I`m a QA',
            location: {city:'London', country:'GB'},
            followed: false,
            imgUrl: 'https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/2024-09/tom-hanks-favorite-actors_0.jpg'
        },
        */
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        default: return state;
    }

};

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
});
export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
});

export default usersReducer;