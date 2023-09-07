import React from "react";
import "../MyPage.css"; // 스타일 파일 임포트
import profileImage from "../components/UserProfile";
import username from "../components/UserName";
import NavigationBar from "../components/MyPageNav";

const MyPage = (props) => {
  const route = props.value;
  return (
    <div>
      <div className="profile-image">
        <img src={profileImage} alt={`${username}'s Profile`} />
      </div>
      <h2>{username}</h2>
      <NavigationBar value={route} />
    </div>
  );
};

export default MyPage;
