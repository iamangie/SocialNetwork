import React from "react";
import style from "./ProfileInfo.module.css";
import background from "../../../assets/img/background.jpg";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={style.backimg} src={background} alt="flamingos" />
      </div>
      <div className={style.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
