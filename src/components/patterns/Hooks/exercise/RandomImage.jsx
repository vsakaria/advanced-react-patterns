import React, { useState, useEffect } from "react";

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState();

  const fetchRandomImage = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=100"
    );
    const data = await response.json();
    const image = data[Math.floor(Math.random() * data.length)];
    setImageUrl(image.thumbnailUrl);
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return <img src={imageUrl} />;
};

export default RandomImage;
