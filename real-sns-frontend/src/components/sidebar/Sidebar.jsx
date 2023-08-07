import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sudebareWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeIcon className="sidebarIcon" />
            <span className="saiberListItemText">ホーム</span>
          </li>
          <li className="sidebarListItem">
            <SearchIcon className="sidebarIcon" />
            <span className="saiberListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsIcon className="sidebarIcon" />
            <span className="saiberListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageIcon className="sidebarIcon" />
            <span className="saiberListItemText">メッセージ</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkIcon className="sidebarIcon" />
            <span className="saiberListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <PersonIcon className="sidebarIcon" />
            <span className="saiberListItemText">プロフィール</span>
          </li>
          <li className="sidebarListItem">
            <SettingsIcon className="sidebarIcon" />
            <span className="saiberListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidbarFriendName"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
