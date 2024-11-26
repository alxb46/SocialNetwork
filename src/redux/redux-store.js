import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = configureStore({
    reducer: reducers,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // по умолчанию redux-thunk включен
});

window.store = store;

export default store;
