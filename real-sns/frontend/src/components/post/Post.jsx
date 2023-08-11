import React, { useEffect, useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
//dummyDataからデータを取得{}の中にdummyData内で
//export const hogeの「hoge」にあたる文字を記述することで特定のオブジェクトを取得できる
// import { Users } from "../../dummyData/dummyData";

//Timeline.jsxにてmap関数でpropで渡されてきたPostsデータをpropsで取得
export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  //likeデータの状態関数
  const [like, setLike] = useState(post.like);
  //いいねが押されているか判別する状態関数
  const [isLiked, setIsLiked] = useState(false);

  //いいねが押された時のクリックイベント
  const handleLike = () => {
    //isLikedが押されていたらいいねを-1し、押されていなかったら+1する。（押してるか押してないかはisLikedに入ってる）
    setLike(isLiked ? like - 1 : like + 1);
    //いいね押されたらbool値を反転させる
    setIsLiked(!isLiked);
  };

  const [user, setUser] = useState({});
  useEffect(() => {
    //useEfect内ではasync/awaitの使用方法が特殊でuseEfectのコールバックにasyncを使用できない
    //そのためコールバック関数内で改めて関数を定義し、その関数でasyncを使用する
    const fetchUser = async () => {
      //get内のエンドポイントはproxyで設定した値以降のパスを入力
      const response = await axios.get(`/users/${post.userId}`);
      //responseのdataをオブジェクトを取得
      setUser(response.data);
      console.log(response);
    };

    //うまくいかないときは一度ローカルサーバを再起動
    fetchUser();
  }, []);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                // 取得したUserデータの中からfilter関数（コールバックに引数を入れて処理内で条件を記述すると条件に合ったデータを取得できる）
                //データ＋filter関数[フィルターされた結果で取り出したい配列（オブジェクト）番号指定]＋.キー名で取得できる
                user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} className="postImg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              onClick={() => handleLike()}
              src={PUBLIC_FOLDER + "/heart.png"}
              className="likeImg"
              alt=""
            />
            <span className="poastLilkeCounter">
              {like}がいいねを押しました
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
