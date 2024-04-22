import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    //firebaseのデータベースに追加する
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "Reactチュートリアル",
      username: "Like_Engineer",
      verified: true,
      text: tweetMessage,
      avatar: "https://source.unsplash.com/random",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar />
          <input
            value={tweetMessage}
            type="text"
            placeholder="今どうしてる？"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          className="tweetBox__imageInput"
          type="text"
          placeholder="画像のURLを入力してください"
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
