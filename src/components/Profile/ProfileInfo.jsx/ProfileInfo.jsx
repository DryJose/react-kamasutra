import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://lifeonphoto.com/img/images/2021/09/26/image001-38-1280x720.jpg" />
      </div>
      <div className={s.discriprionBlock }>ava</div>
    </div>
  );
}

export default ProfileInfo;
