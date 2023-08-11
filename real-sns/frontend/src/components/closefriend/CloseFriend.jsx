import React from "react";
import "./CloseFriend";

export default function CloseFriend({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={PUBLIC_FOLDER + user.profilePicture}
          alt=""
          className="sidebarFriendImg"
        />
        <span className="sidbarFriendName">{user.username}</span>
      </li>
    </div>
  );
}
