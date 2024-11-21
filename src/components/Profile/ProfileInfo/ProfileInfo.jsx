import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        );
    }
    return (
        <div>
            <div>
                <img src={'https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg'}
                     alt={'background'}/>
            </div>
            <div className={styles.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'profile img'}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;