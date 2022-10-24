import React, { useEffect, useState } from "react";

function ImageCard({ image }) {
  let imageRef = React.createRef();

  const [spans, setSpans] = useState(0);

  useEffect(() => {
    imageRef.current.addEventListener("load", setPicSpans);
  });

  const setPicSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  };

  return (
    <img
      style={{ gridRowEnd: `span ${spans}` }}
      ref={imageRef}
      alt={image.description}
      src={image.urls.regular}
    />
  );
}

export default ImageCard;
