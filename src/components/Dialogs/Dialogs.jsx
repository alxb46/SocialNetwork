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
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <DialogItem name={'user1'} id='1' />
                <DialogItem name={'user2'} id='2' />
                <DialogItem name={'user3'} id='3' />

            </div>
            <div className={styles.messages}>
                <Message message={'Hi'} />
                <Message message={'How are you?'} />
                <Message message={'What are you do?'} />
            </div>
        </div>
    );
}

export default Dialogs;