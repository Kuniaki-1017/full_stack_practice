import React from "react";
import "./Online.css";

export default function Online({ user }) {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgConteiner">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </li>
    </div>
  );
}
