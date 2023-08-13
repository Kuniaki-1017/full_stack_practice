import React, { useContext } from "react";
import "./Share.css";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { AuthContext } from "../../state/AuthContext";

export default function Shere() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今何してるの"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareButtoms">
          <div className="shareOptions">
            <div className="shareOption">
              <ImageIcon className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">写真</span>
            </div>
            <div className="shareOption">
              <GifIcon className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <FaceIcon className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <AnalyticsIcon className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button className="shareButton">投稿</button>
        </div>
      </div>
    </div>
  );
}
