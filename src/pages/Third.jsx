import React, { useState, useEffect } from "react";
import getImageDatas from "../datas/dummyData";
import InputText from "../components/InputText";

function Third() {
  let [imagesData, setImagesData] = useState([]);
  let [imageDiv, setImageDiv] = useState();

  useEffect(() => {
    setImagesData(getImageDatas());
  }, []);

  useEffect(() => {
    console.log(imagesData);
    let images = [];
    if (imagesData) {
      imagesData.map((data) => {
        images.push(<img key={data.src} src={data.src} alt="image"></img>);
      });

      setImageDiv(images);
    }
  }, [imagesData]);

  return (
    <div>
      <div>
        <InputText setImagesData={setImagesData} />
      </div>
      {imageDiv}
    </div>
  );
}

export default Third;
