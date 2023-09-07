import React, { useEffect, useState } from "react";
import axios from "axios";
import MyPage from "../pages/MyPage";
import "../MyPage.css"; // 스타일 파일 임포트

const SeekedClip = () => {
  let images;
  const fetchData = async () => {
    try {
      images = await axios.get(process.env.REACT_APP_BACK_URL);
      console.log(images.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="user-profile-container">
      <MyPage value="viewed" />
      <div className="grid-container">
        {images.map((imageUrl, index) => (
          <div key={index} className="grid-item">
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeekedClip;
