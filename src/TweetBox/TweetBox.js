import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
  const [tweetDisplayName, setTweetDisplayName] = useState("");
  const [tweetUsername, settweetUsername] = useState("");
  const [tweetVerified, setTweetVerified] = useState(true);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [tweetAvatar, setTweetAvatar] = useState("https://image.flaticon.com/icons/svg/179/179809.svg")

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("post").add({
      displayName: tweetDisplayName,
      username: tweetUsername,
      verified: tweetVerified,
      text: tweetMessage,
      image: tweetImage,
      avatar: tweetAvatar
    });


    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://image.flaticon.com/icons/svg/179/179809.svg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>     
        <div className="tweetBox__input">
          <input
              onChange={(e) => setTweetDisplayName(e.target.value)}
              value={tweetDisplayName}
              placeholder="Display Name"
              type="text"
          />
          <input
            onChange = {e => settweetUsername(e.target.value)}
            value={tweetUsername}
            placeholder="User Name"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
