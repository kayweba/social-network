import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 15 },
    { id: 2, message: 'My first post.', likesCount: 10 },
    { id: 3, message: 'Yo', likesCount: 15 },
    { id: 4, message: 'Yo', likesCount: 15 },
    { id: 5, message: 'Yo', likesCount: 15 },
  ];

  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  return (
    <div className={style.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;