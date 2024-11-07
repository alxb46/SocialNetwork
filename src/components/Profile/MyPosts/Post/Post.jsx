import React from 'react';
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt='avatar'/>
            {props.message}
            <div>
                <span>Like</span> {props.likesCount}
            </div>

        </div>
    );
}

export default Post;