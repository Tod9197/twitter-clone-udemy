import {
  ChatBubbleOutline,
  FavoriteBorder,
  PublishOutlined,
  Repeat,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import "./Post.css";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <>
        <div className="post" ref={ref}>
          <div className="post__avatar">
            <Avatar src={avatar} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <h3>{displayName}</h3>
                <span className="post__headerSpecial">
                  <VerifiedUser className="post__badge" />@{username}
                </span>
              </div>
              <div className="post__headerDescription">
                <p>{text}</p>
              </div>
            </div>

            <img src={image} />
            <div className="post__footer">
              <ChatBubbleOutline fontSize="small" />
              <Repeat fontSize="small" />
              <FavoriteBorder fontSize="small" />
              <PublishOutlined fontSize="small" />
            </div>
          </div>
        </div>
      </>
    );
  }
);
export default Post;
