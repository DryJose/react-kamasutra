import React from "react";
import Loader from "../../common/loader/Loader";
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Loader />
  }

  return (
    <div>
      {/* <div>
        <img src="https://lifeonphoto.com/img/images/2021/09/26/image001-38-1280x720.jpg" />
      </div> */}
      <div className={s.discriprionBlock }>
        <img src ={props.profile.photos.large} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>
  );
}

export default ProfileInfo;
