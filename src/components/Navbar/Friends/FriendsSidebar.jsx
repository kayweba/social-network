import React from 'react';
import style from './FriendsSidebar.module.css';

const FriendsSidebar = (props) => {
  return (
    <div className={style.friends}>
      <img src={props.picture} alt="avatar" />
      <div className={style.friendsLink}>
        <a href="#">{props.name}</a>

      </div>
    </div>
  );
}

export default FriendsSidebar;