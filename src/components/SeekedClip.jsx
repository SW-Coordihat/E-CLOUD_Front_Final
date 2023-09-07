import React, { useEffect, useState } from "react";
import axios from "axios";
import MyPage from "../pages/MyPage";

const SeekedClip = () => {
  let item;
  const fetchData = async () => {
    try {
      item = await axios.get(
        process.env.REACT_APP_BACK_URL
      );
      console.log(item.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyPage value ="viewed"/>
  )
};

export default SeekedClip;
