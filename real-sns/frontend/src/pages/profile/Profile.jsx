import React, { useEffect } from "react";
import "./Profile.css";
import Rightbar from "../../components/rightbar/Rightbar";
import Timeline from "../../components/timeline/Timeline";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  useEffect(() => {
    //useEfect内ではasync/awaitの使用方法が特殊でuseEfectのコールバックにasyncを使用できない
    //そのためコールバック関数内で改めて関数を定義し、その関数でasyncを使用する
    const fetchUser = async () => {
      //get内のエンドポイントはproxyで設定した値以降のパスを入力
      const response = await axios.get(`/users/`);
      //responseのdataをオブジェクトを取得
      setUser(response.data);
      console.log(response);
    };

    //うまくいかないときは一度ローカルサーバを再起動
    fetchUser();
  }, []);

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
