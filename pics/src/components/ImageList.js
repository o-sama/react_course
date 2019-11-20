import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
  const images = props.images.map(i => {
    return <ImageCard key={i.id} image={i} />;
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
