import React, { useEffect, useState } from "react";
import "./Profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Timeline from "../../components/timeline/Timeline";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(() => {
    //useEfect内ではasync/awaitの使用方法が特殊でuseEfectのコールバックにasyncを使用できない
    //そのためコールバック関数内で改めて関数を定義し、その関数でasyncを使用する
    const fetchUser = async () => {
      //get内のエンドポイントはproxyで設定した値以降のパスを入力
      const response = await axios.get(`/users?username=${username}`);
      //responseのdataをオブジェクトを取得
      setUser(response.data);
    };

    //うまくいかないときは一度ローカルサーバを再起動
    fetchUser();
  }, [username]);

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
                src={user.coverPictyre || PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
              />
              <img
                className="profileUserUserImg"
                src={
                  user.profilePicture
                    ? PUBLIC_FOLDER + user.profilePicture
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRgihtBottom">
            {/* Timeline に「"kuniaki"」を文字列でpropsで渡す*/}
            <Timeline username={username} />
            {/* Rightbarに「user」をpropsで渡す */}
            {/* trueを渡す場合は、=を省略してprops名だけを書くことが可能です。 */}
            <Rightbar user />
          </div>
        </div>
      </div>
    </>
  );
}
