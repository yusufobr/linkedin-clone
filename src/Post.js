import React from "react";
import "./Post.css";
import InputOption from "./InputOption";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, descreption, message, imageUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar
          sx={{ width: 40, height: 40 }}
          className="post-avatar"
          src={imageUrl}
        />
        <div className="post-header-info">
          <h3>{name}</h3>
          <h4 className="post-header-descreption">{descreption}</h4>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-footer">
        <InputOption Icon={ThumbUpIcon} text={"Like"} color={"gray"} />
        <InputOption Icon={CommentIcon} text={"Share"} color={"gray"} />
        <InputOption Icon={ShareIcon} text={"Reply"} color={"gray"} />
        <InputOption Icon={SendIcon} text={"Send"} color={"gray"} />
      </div>
    </div>
  );
}

export default Post;
