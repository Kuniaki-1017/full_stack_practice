import React from "react";
import "./Timeline.css";
import Shere from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyData/dummyData";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timlineWrapper">
        <Shere />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
