import React, { useState } from "react";
import background from "../../../assets/img/background.jpg";
import userPhoto from "../../../assets/img/user.png";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataFrom";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  isFetching,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
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

        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            onSubmit={onSubmit}
            profile={profile}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            activateEditMode={() => {
              setEditMode(true);
            }}
          />
        )}

        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle}: {contactValue}
    </div>
  );
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={activateEditMode}>Edit</button>
        </div>
      )}

      <div>Full name: {profile.fullName}</div>
      <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
      {profile.lookingForAJob && (
        <div>My professional skills: {profile.lookingForAJobDescription}</div>
      )}
      <div>About me: {profile.aboutMe}</div>
      <div>
        Contacts:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileInfo;
