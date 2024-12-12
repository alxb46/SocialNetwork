import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/icon.png";
import {Link} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 50; i++) {
        pages.push(i);
    }
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
    // }
    return (
        <div>
            <div className={styles.pageNumberContainer}>
                {pages.map(page => {
                    return (
                        <span className={props.currentPage === page && styles.selectedPage}
                              onClick={(e) => {
                                  props.onPageChanged(page)
                              }}>{page}</span>
                    );
                })}
            </div>
            {
                props.users.map(user => <div key={user.id} className={styles.userContainer}>
                    <span>
                        <div className={styles.userBodyContainer}>
                            <Link to={'/profile/' + user.id}>
                                <img
                                    className={styles.userPhoto}
                                    src={user.photos.small != null ? user.photos.small : userPhoto}
                                    alt="user-image"
                                />
                            </Link>
                            
                        </div>
                        <div className={styles.userBodyContainer}>
                            {
                                user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.unfollowUser(user.id);}}>


                                        Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              props.followUser(user.id);}}>

                                        Follow</button>
                            }

                        </div>
                    </span>
                    <div className={styles.userInfoContainer}>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;