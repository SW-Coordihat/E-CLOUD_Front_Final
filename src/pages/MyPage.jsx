import React from "react";
import '../MyPage.css'; // 스타일 파일 임포트
import profileImage from '../components/UserProfile';
import username from '../components/UserName';

const MyPage = () => {
  return (
    <div className="user-profile-container">
      <div className="profile-image">
        <img src={profileImage} alt={`${username}'s Profile`} />
      </div>
      <h2>{username}</h2>
    </div>
  );
};

export default MyPage;