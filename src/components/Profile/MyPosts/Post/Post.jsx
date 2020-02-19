import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  debugger;
  return (
    <div className={style.item}>
      <img src="https://image.flaticon.com/icons/svg/438/438014.svg" alt="avatar" />
      {props.message}
      <div>
        <span>like: {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;