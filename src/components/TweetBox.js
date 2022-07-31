import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/init";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

    async function sendTweet(event) {
        event.preventDefault();
        const post = {
            displayName: 'Nayab Khan',
            username: 'nayabkhan99',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://lh3.googleusercontent.com/ogw/AOh-ky2F9wZHVsoEs8CP3CTBLFj0Ii_TRw4I0xNgGJ7qNw=s32-c-mo"
        }
        await addDoc(collection(db, "posts"), post);
        setTweetMessage("");
        setTweetImage("");
    }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/ogw/AOh-ky2F9wZHVsoEs8CP3CTBLFj0Ii_TRw4I0xNgGJ7qNw=s32-c-mo" />
          <input
            onChange={(event) => setTweetMessage(event.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(event) => setTweetImage(event.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
