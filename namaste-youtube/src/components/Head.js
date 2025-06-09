import React, { useEffect, useState } from "react";
import { USER_ICON, YOUTUBE_SEARCH_API } from "../utility/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utility/appSlice";
import { Link } from "react-router-dom";
import { cacheResults } from "../utility/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await response.json();
      // You can now use 'data' for suggestions
      setSuggestions(data[1]);
      dispatch(
        cacheResults({
          [searchQuery]: data[1],
        })
      );
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
    }
  };

  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-20 cursor-pointer"
          onClick={handleToggle}
          alt="hamburger"
          src="https://getdrawings.com/free-icon-bw/hamburger-menu-icon-9.png"
        />
        <Link to={"/"}>
          <img
            className="h-8 mt-6 cursor-pointer"
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1024px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </Link>
      </div>
      <div className="col-span-10 mt-4 ml-[25%]">
        <input
          className=" w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <button className="border border-gray-500 p-2 bg-gray-400 rounded-r-full">
          🔍
        </button>
        {showSuggestion && suggestion.length > 0 && (
          <div className="absolute bg-white ml-2 px-5 py-3 w-[28%] shadow-lg">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="my-2 p-2 shadow-sm hover:bg-gray-300 rounded-sm"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 mt-3 ml-[50%]">
        <img className="h-12" alt="user icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
