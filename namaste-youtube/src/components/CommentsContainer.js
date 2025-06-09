import React, { useEffect } from "react";
import Comments from "./Comments";
import { COMMENT_JSON } from "../utility/constant";

const CommentList = ({ commentData }) => {
  return commentData.map((comment,index) => (
    <div key={index}>
      <Comments key={index} commentsData={comment} />
      <div className="border border-l-black ml-10 rounded-lg bg-gray-300">
       {comment.replies && <CommentList key={index} commentData={comment.replies} />} 
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mt-5 px-5 w-2/3">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList commentData={COMMENT_JSON} />
    </div>
  );
};

export default CommentsContainer;
