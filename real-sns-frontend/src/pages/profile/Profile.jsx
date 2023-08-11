import React from "react";
import "./Profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Timeline from "../../components/timeline/Timeline";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="./assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserUserImg"
                src="./assets/person/1.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">kuniaki</h4>
              <spnan className="profileInfoDesc">
                フロントエンドエンジニアをしております
              </spnan>
            </div>
          </div>
          <div className="profileRgihtBottom">
            <Timeline />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
