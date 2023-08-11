import React from "react";
import "./Profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Timeline from "../../components/timeline/Timeline";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
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
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
              />
              <img
                className="profileUserUserImg"
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">kuniaki</h4>
              <span className="profileInfoDesc">
                フロントエンドエンジニアをしております
              </span>
            </div>
          </div>
          <div className="profileRgihtBottom">
            {/* Timeline に「"kuniaki"」を文字列でpropsで渡す*/}
            <Timeline username={"kuniaki"} />
            {/* Rightbarに「profile」をpropsで渡す */}
            {/* trueを渡す場合は、=を省略してprops名だけを書くことが可能です。 */}
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
