import React, { useEffect, useState } from "react";
import "./TimeLine.css";
import { TweetBox } from "./TweetBox";
import Post from "./Post";
import db from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const TimeLine = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData = collection(db, "posts");
    getDocs(postData).then((querySnapshot) => {
      console.log();
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="timeline">
      {/* Header */}
      <div className="timeline--header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avater}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default TimeLine;
