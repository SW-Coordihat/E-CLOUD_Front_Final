import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../MyPage.css";

const NavigationBar = (props) => {
  const [activeTab, setActiveTab] = useState(props.value);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navigation-bar">
      <Link
        to="/MyPage/Saved"
        onClick={() => handleTabClick("saved")}
        className="nav-item"
      >
        <div className={`nav-item ${activeTab === "saved" ? "active" : ""}`}>
          저장한 클립
        </div>
      </Link>
      <Link
        to="/MyPage/Seeked"
        className="nav-item"
        onClick={() => handleTabClick("viewed")}
      >
        <div className={`nav-item ${activeTab === "viewed" ? "active" : ""}`}>
          살펴 본 클립
        </div>
      </Link>
    </nav>
  );
};

export default NavigationBar;
