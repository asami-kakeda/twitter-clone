import React from "react";
import "./TimeLine.css";
import { TweetBox } from "./TweetBox";

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
    </div>
  );
};

export default TimeLine;
