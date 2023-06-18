import React from "react";
import "./App.css";
import Header from "./Header";
import SideBar from "./SideBar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />

      {/* app body */}
      <div className="app-body">
        {/* side bar */}
        <SideBar />
        {/* feed */}
        <Feed />
        {/* widgets */}
        <SideBar />
      </div>
    </div>
  );
}

export default App;
