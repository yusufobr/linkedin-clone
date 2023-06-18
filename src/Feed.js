import React from "react";
import { useState, useEffect } from "react";
import "./Feed.css";
import firebase from "firebase/compat/app";
import Post from "./Post";
import { db } from "./firebase";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import EventIcon from "@mui/icons-material/Event";
import NotesIcon from "@mui/icons-material/Notes";
import Avatar from "@mui/material/Avatar";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const SendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "youssef oubari",
      descreption: "Software Engineer",
      message: input,
      imageUrl:
        "https://avatars.githubusercontent.com/u/52011598?v=4",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <Avatar
            sx={{ width: 40, height: 40 }}
            className="feed-input-avatar"
            src="https://avatars.githubusercontent.com/u/52011598?v=4"
          />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              size="45"
              placeholder="What's on your mind?"
            />
            <button onClick={SendPost} type="submit">
              Post
            </button>
          </form>
        </div>
        <div className="feed-input-options">
          <InputOption Icon={ImageIcon} text="Photo" color="#378fe9" />
          <InputOption Icon={VideoLibraryIcon} text="Video" color="#5f9b41" />
          <InputOption Icon={EventIcon} text="Event" color="#c37d16" />
          <InputOption Icon={NotesIcon} text="Write Article" color="#e16745" />
        </div>
      </div>

      {posts.map(({ id, data: { name, descreption, message, imageUrl } }) => (
        <Post
          key={id}
          name={name}
          descreption={descreption}
          message={message}
          imageUrl={imageUrl}
        />
      ))}
      <Post
        name="youssef oubari"
        descreption="Software Engineer"
        message="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. "
        imageUrl="https://avatars.githubusercontent.com/u/52011598?v=4"
      />
    </div>
  );
};

export default Feed;
