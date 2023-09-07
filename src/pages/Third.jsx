import React, { useState, useEffect } from "react";
import getImageDatas from "../datas/dummyData";
import InputText from "../components/InputText";
import ClickImage from "./ClickImage";
import { Link } from "react-router-dom";

function Third() {
  let [imagesData, setImagesData] = useState([]);
  let [imageDiv, setImageDiv] = useState();

  useEffect(() => {
    setImagesData(getImageDatas());
  }, []);

  useEffect(() => {
    console.log(imagesData);
    let buttons = [];
    if (imagesData) {
      imagesData.map((data) => {
        buttons.push(
          <Link to="/click">
            <button
              key={data.src}
              onClick={() => handleButtonClick(data.src)}
              style={{
                width: "20%",
                border: "radius",
                backgroundColor: "#fff",
                color: "#fff",
                borderRadius: "8px",
                padding: "5px", // 버튼 내부 간격을 조절합니다.
                margin: "5px",
                cursor: "pointer",
              }}
            >
              <div style={{ overflow: "hidden", borderRadius: "5px" }}>
                <img
                  src={data.src}
                  alt="image"
                  style={{
                    width: "100%", // 이미지를 버튼 내에 꽉 채우도록 크기 조정합니다.
                    height: "100%",
                    objectFit: "cover", // 이미지 비율 유지 및 가득 차게 표시합니다.
                  }}
                />
              </div>
            </button>
          </Link>
        );
      });

      setImageDiv(buttons);
    }
  }, [imagesData]);

  const handleButtonClick = (imageData) => {
    // 클릭된 이미지에 대한 처리를 수행할 수 있습니다.
    <ClickImage src={imageData} />;
  };

  return (
    <div>
      <div>
        <InputText setImagesData={setImagesData} />
      </div>
      <div className="img">{imageDiv}</div>
    </div>
  );
}

export default Third;
