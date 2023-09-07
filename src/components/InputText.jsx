import React, { useState } from "react";
import axios from "axios";

function InputText(props) {
  const [text, setText] = useState("");

  const TT = async () => {
    try {
      const response = await axios.post(
        "/api/image",
        {
          prompt: text,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      props.setImagesData(response.data["imageUrl"]);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  };

  function handleTextChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input value={text} onChange={handleTextChange} placeholder="검색어를 입력하세요." />
      <button
        onClick={() => {
          console.log("test");
          TT();
        }}
      >
        ▶
      </button>
    </div>
  );
}
export default InputText;
