import React from "react";
import "./Timeline.css";
import Shere from "../share/Share";
import Post from "../post/Post";
//dummyDataからデータを取得{}の中にdummyData内で
//export const hogeの「hoge」にあたる文字を記述することで特定のオブジェクトを取得できる
import { Posts } from "../../dummyData/dummyData";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timlineWrapper">
        <Shere />
        {/* dummyData内のPostsデータをmap関数を使用し一つずつ（計5つ）POSTコンポーネントにpropsで渡す*/}
        {/* 上記の結果、Postコンポーネントが5回出力され、且つPostデータ内のデータが順番に出力される*/}
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
