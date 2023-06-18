import React from "react";
import "./SideBar.css";
import Avatar from "@mui/material/Avatar";

const SideBar = () => {
  const recentArticles = (topic) => {
    return (
      <div className="recent-articles">
        <span className="recent-articles-hash">#</span>
        <p className="recent-articles-title">{topic}</p>
      </div>
    );
  };
  return (
    <div className="side-bar">
      <div className="side-bar-header">
        <img
          className="side-bar-bg"
          src="https://media-exp1.licdn.com/dms/image/C4D16AQG9uhJ3aP3BKg/profile-displaybackgroundimage-shrink_200_800/0/1588260587416?e=1666224000&v=beta&t=e1OFd4pztD5CH9BKAUErp53-jezmKY1PvlCmLOQwxYc"
          alt=""
        />
        <Avatar
          sx={{ width: 64, height: 64 }}
          className="side-bar-avatar"
          src="https://avatars.githubusercontent.com/u/52011598?v=4"
        />
        <h2 className="side-bar-title">Youssef oubari</h2>
        <p className="profile-info">Web Development & Marketing Digital.</p>
      </div>
      <div className="side-bar-body">
        <ul className="side-bar-list">
          <li>
            <div className="side-bar-list-item">
              <p>viewed your profile</p>
              <p className="side-bar-number">2,512</p>
            </div>
          </li>
          <li>
            <div className="side-bar-list-item">
              <p>Connections </p>
              <p className="side-bar-number">2,512</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="side-bar-footer">
        <p>Recent</p>
        {recentArticles("Web Development")}
        {recentArticles("React js")}
        {recentArticles("Web ")}
        {recentArticles("programing")}
        {recentArticles("coding ")}
      </div>
    </div>
  );
};

export default SideBar;
