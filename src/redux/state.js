const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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

    _addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostChange(newText){
        //debugger;
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action){ // { type: 'ADD-POST' }
        //debugger;
        if (action.type === ADD_POST) {
            this._addPost();
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostChange(action.newText);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
            console.log(this._state.dialogsPage.newMessageBody);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 8, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT ,
    newText: text
});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY ,
    body: body
});

export default store;