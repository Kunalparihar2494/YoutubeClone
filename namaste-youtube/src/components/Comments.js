import React from "react";
import { USER_ICON } from "../utility/constant";

const Comments = ({ commentsData }) => {
  const { author, comment } = commentsData;
  return (
    <div className="flex bg-gray-300 m-1 p-1 rounded-md">
      <img className="w-12 h-12" alt="" src={USER_ICON} />
      <div className="px-3">
        <p className="font-bold">{author}</p>
        <p className="text-sm">{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
