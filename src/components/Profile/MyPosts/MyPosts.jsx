import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi, how are you?" likesCount="15" />
        <Post message="It's my first post" likesCount="10" />
      </div>
    </div>
  );
}

export default MyPosts;