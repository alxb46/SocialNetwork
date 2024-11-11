const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state, //keep the remaining fields unchanged
                newMessageBody: action.body // update only newMessageBody
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '', // clear newMessageBody
                messages: [...state.messages, {id: 8, message: body}] // add new message
            };
        default: return state;
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY ,
    body: body
});

export default dialogsReducer;