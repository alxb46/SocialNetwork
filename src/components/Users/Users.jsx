import React from "react";
import styles from "./users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers( [
                {
                    id: 1,
                    fullName: 'Alex',
                    status: 'I`m a frontend developer',
                    location: {city:'Odesa', country:'Ukraine'},
                    followed: false,
                    imgUrl: 'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/02LD0JTY.png'
                },
                {
                    id: 2,
                    fullName: 'Dmitriy',
                    status: 'I`m a backend developer',
                    location: {city:'LA', country:'USA'},
                    followed: true,
                    imgUrl: 'https://castingfrontier.com/wp-content/uploads/2021/03/shutterstock_1439469431-scaled.jpg'
                },
                {
                    id: 3,
                    fullName: 'Roman',
                    status: 'I`m a QA',
                    location: {city:'London', country:'GB'},
                    followed: false,
                    imgUrl: 'https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/2024-09/tom-hanks-favorite-actors_0.jpg'
                },
            ]
        );
    }


    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img
                                className={styles.userPhoto}
                                src={user.imgUrl}
                                alt="user-image"
                            />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {props.unfollowUser(user.id)}}>Unfollow</button>
                                : <button onClick={() => {props.followUser(user.id)}}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>

                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;