import React, { useState } from "react";
import "../BottomNav.css";
import { Link } from "react-router-dom";
import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
      <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
        <div>
          <FontAwesomeIcon
            icon="home"
            className={activeNav === 1 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/second" className="nav-link" onClick={() => setActiveNav(2)}>
        <div>
          <FontAwesomeIcon
            icon="compass"
            className={activeNav === 2 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/third" className="nav-link" onClick={() => setActiveNav(3)}>
        <div>
          <FontAwesomeIcon
            icon="plus"
            className={activeNav === 3 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/fourth" className="nav-link" onClick={() => setActiveNav(4)}>
        <div>
          <FontAwesomeIcon
            icon="medal"
            className={activeNav === 4 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link to="/MyPage/Saved" className="nav-link" onClick={() => setActiveNav(5)}>
        <div>
          <FontAwesomeIcon
            icon="user"
            className={activeNav === 5 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
