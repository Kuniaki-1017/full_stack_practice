import React, { useEffect, useState } from "react";
import "./Timeline.css";
import Shere from "../share/Share";
import Post from "../post/Post";
//apiを叩けるaxiosをインポート
import axios from "axios";

//dummyDataからデータを取得{}の中にdummyData内で
//export const hogeの「hoge」にあたる文字を記述することで特定のオブジェクトを取得できる
// import { Posts } from "../../dummyData/dummyData";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //useEfect内ではasync/awaitの使用方法が特殊でuseEfectのコールバックにasyncを使用できない
    //そのためコールバック関数内で改めて関数を定義し、その関数でasyncを使用する
    const fetchPosts = async () => {
      //get内のエンドポイントはproxyで設定した値以降のパスを入力
      const response = await axios.get(
        "/posts/timeline/64cf11379925232524853c9d"
      );
      //responseのdataをオブジェクトを取得
      setPosts(response.data);
    };
    //うまくいかないときは一度ローカルサーバを再起動
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timlineWrapper">
        <Shere />
        {/* dummyData内のPostsデータをmap関数を使用し一つずつ（計5つ）POSTコンポーネントにpropsで渡す*/}
        {/* 上記の結果、Postコンポーネントが5回出力され、且つPostデータ内のデータが順番に出力される*/}
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
