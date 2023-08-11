import React from "react";
import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        <div className="eventConteiner">
          <img src="./assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中!
          </span>
        </div>
        <img src="./assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgConteiner">
              <img src="./assets/person/1.jpeg" alt="" className="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">kuniaki</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
