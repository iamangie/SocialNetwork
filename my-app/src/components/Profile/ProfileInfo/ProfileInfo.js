import React from "react";
import style from "./ProfileInfo.module.css";
import background from "../../../assets/img/background.jpg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/img/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img className={style.backimg} src={background} alt="flamingos" />
      </div>

      <div className={style.descriptionBlock}>
        <img
          src={
            props.profile.photos.large ? props.profile.photos.large : userPhoto
          }
          className={style.avatar}
          alt="userPhoto"
        />
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
