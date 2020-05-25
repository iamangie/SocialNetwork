import React from "react";
import style from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://i.pinimg.com/236x/ec/dc/b1/ecdcb11a0f1b8aeb367e929f09978465--photoshop-cs-padme.jpg",
        followed: false,
        fullName: "Angie",
        status: "I'm a queen.",
        location: { city: "Kyiv", country: "Ukraine" },
      },
      {
        id: 2,
        photoUrl:
          "https://birds-piggies.ru/uploads/posts/2016-12/1482931343_avatarki-angry-birds-1.jpg",
        followed: true,
        fullName: "Max",
        status: "Life is full of opportunities!",
        location: { city: "Lviv", country: "Ukraine" },
      },
      {
        id: 3,
        photoUrl:
          "https://www.angrybirdsnest.com/wp-content/uploads/2013/10/Hand-Drawn-Yellow-Bird-Avatar.jpg",
        followed: true,
        fullName: "Antony",
        status: "The sun is shining brightly :D",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 4,
        photoUrl:
          "https://lh3.googleusercontent.com/proxy/NN3HBdDthdmPd_WC2tzTkH-IcagNf8u7pNPRGqlQVqafWDxTVbc-KJl2cJ4fJVn6ilbsMLG1cw85ggftxX3PnpKVI1gSXQUP0G_H9lkOiDxGUdyWXZwjBJrW-g",
        followed: false,
        fullName: "Joy",
        status: "Looking for adventures.",
        location: { city: "New York", country: "USA" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key="u.id">
          <span>
            <div>
              <img src={u.photoUrl} alt="avatar" className={style.avatar} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
