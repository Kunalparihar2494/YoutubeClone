import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const youtubeFilters = [
    { id: 1, label: "All" },
    { id: 2, label: "Music" },
    { id: 3, label: "Live" },
    { id: 4, label: "Gaming" },
    { id: 5, label: "Mixes" },
    { id: 6, label: "News" },
    { id: 7, label: "Podcasts" },
    { id: 8, label: "Watched" },
    { id: 9, label: "Recently uploaded" },
    { id: 10, label: "New to you" },
  ];

  return (
    <div className="flex">
      {youtubeFilters.map((filter) => (
        <Button key={filter.id} name={filter.label} />
      ))}
    </div>
  );
};

export default ButtonList;
