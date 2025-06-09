import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-48 shadow-xl h-screen">
      <div className="mt-2">
       <Link to={'/'}><li>Home</li></Link> 
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Youtube Music</li>
      </div>
      <hr className="mx-2 my-2"></hr>
      <h1 className="text-xl font-bold mt-4 ml-2">You</h1>
      <ul className="ml-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Films</li>
        <li>News</li>
      </ul>
      <hr className="mx-2 my-2"></hr>
      <h1 className="text-xl font-bold mt-4 ml-2">Subscription</h1>
      <ul className="ml-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Films</li>
        <li>News</li>
      </ul>
      <hr className="mx-2"></hr>
      <h1 className="text-xl font-bold mt-4 ml-2">Explore</h1>
      <ul className="ml-2">
        <li>Music</li>
        <li>Sports</li>
        <li>Films</li>
        <li>News</li>
      </ul>
      <hr className="mx-2"></hr>
      <li>Setting</li>
      <li>Report History</li>
      <li>Help</li>
      <li>Send Feedback</li>
    </div>
  );
};

export default Sidebar;
