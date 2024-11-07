import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post message={'hi, how are you?'} likesCount={'10'}/>
                <Post message={'its my first post'} likesCount={'20'}/>
            </div>
        </div>
    );
}

export default MyPosts;