import React from "react";
import style from "./ProfileInfo.module.css";
import background from "../../../assets/img/background.jpg";
import Preloader from "../../common/Preloader/Preloader";

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
        <img src={props.profile.photos.large} alt="userPhoto" />
        <div>
          Twitter:
          {props.profile.contacts.twitter
            ? props.profile.contacts.twitter
            : " I don't have it"}
        </div>
        <div>
          Status:
          {props.profile.lookingForAJob
            ? props.profile.lookingForAJobDescription
            : " nothing to say"}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
