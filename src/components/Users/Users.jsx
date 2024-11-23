import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/icon.png";
import {Link} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

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
                            {user.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "5ae46dee-bde3-4f59-bcb7-42ce831bc0cb"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollowUser(user.id);
                                            }
                                        })
                                        .catch(error => console.error(error));
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "5ae46dee-bde3-4f59-bcb7-42ce831bc0cb"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followUser(user.id);
                                            }
                                        })
                                        .catch(error => console.error(error));
                                }}>Follow</button>
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