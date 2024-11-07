import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={'https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg'}
                     alt={'background'}/>
            </div>
            <div className={styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;