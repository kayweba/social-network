import React from 'react';
import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img src="https://www.australiangeographic.com.au/wp-content/uploads/2018/06/stars1.jpg" alt="background" />
      </div>
      <div>
        ava + desription
    </div>
      <MyPosts />
    </div>
  );
}

export default Profile;