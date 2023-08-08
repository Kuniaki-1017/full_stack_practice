import React from "react";
import "./Timeline.css";
import Shere from "../share/Share";
import Post from "../post/Post";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timlineWrapper">
        <Shere />
        <Post />
      </div>
    </div>
  );
}
