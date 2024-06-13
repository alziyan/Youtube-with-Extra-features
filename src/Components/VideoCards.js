import React from "react";

const VideoCards = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-3 m-3 w-72 bg-slate-200 shadow-lg  rounded-lg">
      <img
        className="rounded-md"
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCards;
