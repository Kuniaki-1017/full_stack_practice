import React from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="./assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">kuniaki</span>
            <span className="postDate">5分前</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">SNSを自作中です</span>
          <img src="./assets/post/1.jpeg" className="postImg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" className="likeImg" alt="" />
            <span className="poastLilkeCounter">5人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">4コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
