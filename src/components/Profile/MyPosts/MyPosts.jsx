import React from 'react';
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id:1, message: 'hi, how are you?', likesCount: 10},
        {id:2, message: 'its my first post', likesCount: 20},
    ];

    let postsElements = postData
        .map((post) => {
            return <Post message={post.message} likesCount={post.likesCount}/>;
        })

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;