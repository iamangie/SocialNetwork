import React from "react";
import background from "../../../assets/img/background.jpg";
import userPhoto from "../../../assets/img/user.png";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({ profile, status, updateUserStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img className={style.backimg} src={background} alt="flamingos" />
      </div>

      <div className={style.descriptionBlock}>
        <img
          src={profile.photos.large ? profile.photos.large : userPhoto}
          className={style.avatar}
          alt="userPhoto"
        />
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
