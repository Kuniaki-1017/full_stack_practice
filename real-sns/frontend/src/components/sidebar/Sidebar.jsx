import React from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseFriend from "../closefriend/CloseFriend";
//dummyDataからデータを取得{}の中にdummyData内で
//export const hogeの「hoge」にあたる文字を記述することで特定のオブジェクトを取得できる
import { Users } from "../../dummyData/dummyData";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sudebareWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeIcon className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
              <span className="saiberListItemText">ホーム</span>
            </Link>
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
            <Link
              to="/profile/kuniaki"
              style={{ textDecoration: "none", color: "#333" }}
            >
              <span className="saiberListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <SettingsIcon className="sidebarIcon" />
            <span className="saiberListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
