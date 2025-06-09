import React from "react";
import { Link } from "react-router-dom";

const VideosCard = ({ info,className = ""  }) => {
  const { snippet } = info;
  return (
    <div className={`w-[19%] m-2 p-2 shadow-lg ${className}`}>
      <Link to={"/watch?v=" + info?.id}>
        <img alt="thumb" src={snippet?.thumbnails?.medium?.url} />
        <p className="font-bold">{snippet?.title}</p>
        <p className="font-semibold">{snippet?.channelTitle}</p>
      </Link>
    </div>
  );
};

export const AdVideoCard = ({info}) => {
  return (
    <>
      <h1 className="text-red-500 absolute mt-5 ml-5">This is Advertisement</h1>
      <VideosCard info={info} className="border border-black opacity-70"/>
    </>
  )
}

export default VideosCard;
