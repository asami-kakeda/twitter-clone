import React from "react";
import "./TimeLine.css";
import { TweetBox } from "./TweetBox";
import Post from "./Post";

const TimeLine = () => {
  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default TimeLine;
