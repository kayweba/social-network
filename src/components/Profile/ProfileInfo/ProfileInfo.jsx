import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img src="https://www.australiangeographic.com.au/wp-content/uploads/2018/06/stars1.jpg" alt="background" />
      </div>
      <div className={style.descriptionBlock}>
        ava + desription
      </div>
    </div>
  );
}

export default ProfileInfo;