import React, { useContext, useEffect, useState } from "react";
import "./Timeline.css";
import Shere from "../share/Share";
import Post from "../post/Post";
//apiを叩けるaxiosをインポート
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";

//dummyDataからデータを取得{}の中にdummyData内で
//export const hogeの「hoge」にあたる文字を記述することで特定のオブジェクトを取得できる
// import { Posts } from "../../dummyData/dummyData";

export default function Timeline({ username }) {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    //useEfect内ではasync/awaitの使用方法が特殊でuseEfectのコールバックにasyncを使用できない
    //そのためコールバック関数内で改めて関数を定義し、その関数でasyncを使用する
    const fetchPosts = async () => {
      //get内のエンドポイントはproxyで設定した値以降のパスを入力
      const response = username
        ? await axios.get(`/posts/profile/${username}`) //プロフィールの場合
        : await axios.get(`/posts/timeline/${user._id}`); //ホームの場合
      //responseのdataをオブジェクトを取得
      //sort関数でソートを行う関連記事：https://dezanari.com/js-sort/
      setPosts(
        //引数post1には配列のうちの1つの要素、bには次の要素が入ります。
        //そしてsort関数は戻り値が0未満なら順番は変わらない、
        //0より大きいなら順番を入れ替えるという処理をします。
        //大きい数字は次も比較されてどんどん後ろに下がる？最終的に一番最後になる？
        //下記は数字が大き方が前にくる処理？数字が大きい→時間が経過している
        response.data.sort((post1, post2) => {
          //post1と2を逆にすると逆ソートされる
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    //うまくいかないときは一度ローカルサーバを再起動
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="timeline">
      <div className="timlineWrapper">
        <Shere />
        {/* dummyData内のPostsデータをmap関数を使用し一つずつ（計5つ）POSTコンポーネントにpropsで渡す*/}
        {/* 上記の結果、Postコンポーネントが5回出力され、且つPostデータ内のデータが順番に出力される*/}
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
