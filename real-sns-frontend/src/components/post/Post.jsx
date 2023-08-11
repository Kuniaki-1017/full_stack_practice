import React from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//dummyDataからデータを取得{}の中にdummyData内で
//export const hogeの「hoge」にあたる文字を記述することで特定のオブジェクトを取得できる
import { Users } from "../../dummyData/dummyData";

//Timeline.jsxにてmap関数でpropで渡されてきたPostsデータをpropsで取得
export default function Post({ post }) {
  // const user = Users.filter((user) => user.id === 1);
  // console.log(user[0].username);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                // 取得したUserデータの中からfilter関数（コールバックに引数を入れて処理内で条件を記述すると条件に合ったデータを取得できる）
                //データ＋filter関数[フィルターされた結果で取り出したい配列（オブジェクト）番号指定]＋.キー名で取得できる
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} className="postImg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" className="likeImg" alt="" />
            <span className="poastLilkeCounter">
              {post.like}がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.commnet}コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
