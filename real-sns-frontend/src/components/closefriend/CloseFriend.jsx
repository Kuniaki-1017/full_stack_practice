import React from "react";
import "./CloseFriend";

export default function CloseFriend({ user }) {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidbarFriendName">{user.username}</span>
      </li>
    </div>
  );
}
