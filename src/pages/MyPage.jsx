import React from "react";
import "../MyPage.css"; // 스타일 파일 임포트
import profileImage from "../components/UserProfile";
import username from "../components/UserName";
import NavigationBar from "../components/MyPageNav";

const MyPage = () => {
  return (
    <div className="user-profile-container">
      <div className="profile-image">
        <img src={profileImage} alt={`${username}'s Profile`} />
      </div>
      <h2>{username}</h2>
      <NavigationBar />
    </div>
  );
};

export default MyPage;
