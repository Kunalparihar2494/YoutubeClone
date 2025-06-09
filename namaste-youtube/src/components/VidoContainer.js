import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utility/constant";
import VideosCard, { AdVideoCard } from "./VideosCard";

const VidoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <VideosCard key={video?.id} info={video} />
      ))}
    </div>
  );
};

export default VidoContainer;
