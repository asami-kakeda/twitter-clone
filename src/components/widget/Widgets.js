import { Search } from "@mui/icons-material";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { TwitterShareButton } from "react-twitter-embed";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets--input">
        <Search className="widgets--searchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets--widgetCntainer">
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記*/}
        <TwitterTweetEmbed tweetId={"1782382863255761297"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ka_pujyoshi"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/ka_pujyoshi"}
          options={{ text: "#React.js勉強中", via: "ka_pujyoshi" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
