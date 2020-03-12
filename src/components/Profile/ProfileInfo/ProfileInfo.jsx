import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  debugger;
  return (
    <div>
      <div>
        <img src="https://www.australiangeographic.com.au/wp-content/uploads/2018/06/stars1.jpg" alt="background" />
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + desription
      </div>
    </div>
  );
}

export default ProfileInfo;