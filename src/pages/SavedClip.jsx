import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyPage from '../pages/MyPage';
import '../MyPage.css'; // 스타일 파일 임포트

const SavedClip = () => {
    let [images, setImages] = useState([]);
    const fetchData = async () => {
        try {
            await axios.get(process.env.REACT_APP_BACK_URL).then((response) => {
                if (response.status === 200) {
                    let imageArray = [];
                    imageArray.push(response.data.response);
                    console.log(imageArray);
                    setImages(imageArray);
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="user-profile-container">
            <MyPage value="saved" />
            <div className="grid-container">
                {images &&
                    images.map((imageUrl, index) => (
                        <div key={index} className="grid-item">
                            <img src={imageUrl} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SavedClip;
