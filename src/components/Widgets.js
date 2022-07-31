import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1553417679305850880"} />

        <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="dailyrzoro"
            options={{ height: 400 }}
        />

        <TwitterShareButton 
            url={"https://twitter.com/dailyrzoro"}
            option={{ text: "One Piece is the best", via: "dark" }}
        />

      </div>
    </div>
  );
}

export default Widgets;
