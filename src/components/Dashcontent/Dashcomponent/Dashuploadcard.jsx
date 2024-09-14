import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const Dashuploadcard = ({file}) => {
    
  return (
    <div className="upload-card">
      <img
        className="upload-img"
        src={URL.createObjectURL(file)}
        alt="Product image"
      />
      <p>
        {file.name}<span>{file.size / 1024} kb</span>
      </p>

      <h2>
        <RiDeleteBin6Line />
      </h2>
    </div>
  );
};

export default Dashuploadcard;
