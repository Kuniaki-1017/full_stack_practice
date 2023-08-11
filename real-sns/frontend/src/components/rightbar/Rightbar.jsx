import React from "react";
import "./Rightbar.css";
//dummyDataからデータを取得{}の中にdummyData内で
//export const hogeの「hoge」にあたる文字を記述することで特定のオブジェクトを取得できる
import { Users } from "../../dummyData/dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  // HOMEコンポーネント用のRightbarコンポーネントを関数で用意
  const HomeRightbar = () => {
    return (
      <>
        <div className="eventConteiner">
          <img src="/assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中!
          </span>
        </div>
        <img src="/assets/ad.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          src="/assets/promotion/promotion1.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">ショッピング</p>
        <img
          src="/assets/promotion/promotion2.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">カーショップ</p>
        <img
          src="/assets/promotion/promotion3.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">kuniaki株式会社</p>
      </>
    );
  };

  //Profileコンポーネント用のRightbarコンポーネントを関数で用意
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey">出身:</span>
            <span className="rightbarInfokey">福岡</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src="/assets/person/1.jpeg"
                alt=""
              />
              <span className="rightbarFollowingName">kuniaki</span>
            </div>
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src="/assets/person/2.jpeg"
                alt=""
              />
              <span className="rightbarFollowingName">yamaki</span>
            </div>
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarFollowingName">koga</span>
            </div>
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src="/assets/person/4.jpeg"
                alt=""
              />
              <span className="rightbarFollowingName">matukubo</span>
            </div>
            <div className="rightbarFollowing">
              <img
                className="rightbarFollowingImg"
                src="/assets/person/5.jpeg"
                alt=""
              />
              <span className="rightbarFollowingName">kikukawa</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {/* 三項演算子でpropsで渡されてきた値を元に呼び出すコンポーネントの切り分けをする */}
        {/* propsで渡されてきたprofileは「true」として渡ってきている */}
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
