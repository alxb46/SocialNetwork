import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/icon.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <Preloader/>
        );
    }
    return (
        <div className={styles.heroContainer}>
            <div className={styles.wallImgContainer}>
                <img src={'https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg'}
                     alt={'background'}
                     className={styles.wallImage}
                />
            </div>
            <div className={styles.heroInfoContainer}>
                <div className={styles.heroImgContainer}>
                    <img
                        src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
                        alt={'profile img'}
                        className={styles.heroImage}
                    />
                </div>
                <div className={styles.bioContainer}>
                    <h1 className={styles.heroName}>{props.profile.fullName}</h1>
                    <p className={styles.heroAboutMe}>{props.profile.aboutMe}</p>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} profile={props.profile}  />
            </div>

        </div>
    );
}

export default ProfileInfo;