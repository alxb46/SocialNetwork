import React from 'react';
import styles from './Dialogs.module.css';
import {Link} from "react-router-dom";

const DialogItem =  (props) => {
    return (
        <div className={styles.dialog}>
            <Link to={'/dialogs/' + props.id}>{props.name}</Link>
        </div>
    );
};

const Message = (props) => {
  return (
      <div className={styles.message}>{props.message}</div>
  );
};

const Dialogs = (props) => {


    let dialogs = [
        {id: 1,name: 'user1'},
        {id: 2,name: 'user2'},
        {id: 3,name: 'user3'},
    ];

    let messages = [
        {id: 1,message: 'Hi'},
        {id: 2,message: 'How are you?'},
        {id: 3,message: 'What are you do?'},
    ];

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages
        .map(m =>  <Message message={m.message} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;