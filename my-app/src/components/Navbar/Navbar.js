import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
// import Friends from "./Friends/Friends";

const Navbar = (props) => {
  // const friendsElement = props.state.friends.map((f) => (
  //   <Friends name={f.name} />
  // ));

  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li>
          <NavLink
            to="/profile"
            className={style.link}
            activeClassName={style.active}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={style.link}
            activeClassName={style.active}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dialogs"
            className={style.link}
            activeClassName={style.active}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={style.link}
            activeClassName={style.active}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={style.link}
            activeClassName={style.active}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={style.link}
            activeClassName={style.active}
          >
            Settings
          </NavLink>
        </li>
      </ul>
      {/* <div>
        <h3>Friends</h3>
        {friendsElement}
      </div> */}
    </nav>
  );
};

export default Navbar;
