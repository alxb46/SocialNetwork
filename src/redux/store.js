import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state : {
        profilePage: {
            posts:[
                {id:1, message: 'hi, how are you?', likesCount: 10},
                {id:2, message: 'its my first post', likesCount: 20},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1,name: 'user1'},
                {id: 2,name: 'user2'},
                {id: 3,name: 'user3'},
            ],
            messages: [
                {id: 1,message: 'Hi'},
                {id: 2,message: 'How are you?'},
                {id: 3,message: 'What are you do?'},
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber(){
        console.log('State changed');
    },
    getState(){
        return this._state;
    },
    subscribe: function (observer) {
        // debugger;
        this._callSubscriber = observer;
    },

    dispatch(action){ // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;