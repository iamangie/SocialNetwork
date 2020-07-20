import React from "react";
import background from "../../../assets/img/background.jpg";
import userPhoto from "../../../assets/img/user.png";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  isFetching,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div>
        <img className={style.backimg} src={background} alt="flamingos" />
      </div>

      <div className={style.descriptionBlock}>
        <div>
          {isFetching ? (
            <Preloader />
          ) : (
            <img
              src={profile.photos.large ? profile.photos.large : userPhoto}
              className={style.avatar}
              alt="userPhoto"
            />
          )}
        </div>

        {isOwner && <input type="file" onChange={onAvatarSelected} />}

        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
