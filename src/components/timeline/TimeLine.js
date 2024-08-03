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
      <Post
        displayName="プログラミングチュートリアル"
        username="ka_pujyoshi"
        verified={true}
        text="初めてのツイート"
        avatar="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://images.unsplash.com/photo-1620553968653-382a1fb651d0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default TimeLine;
