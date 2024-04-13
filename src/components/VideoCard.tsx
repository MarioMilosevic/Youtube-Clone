import { ResponseType } from "axios";
import { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { generatePublishedDate } from "../utils/HelperFunctions";
import { currentDate } from "../utils/HelperFunctions";
import { formatTimeDifference } from "../utils/HelperFunctions";
import { PiShareFatLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FiShare } from "react-icons/fi";

const VideoCard = ({ snippet, kind, id, statistics }: VideoCardTypes) => {
  // const views: string = parseInt(viewCount).toLocaleString();
  // const likes: string = parseInt(likeCount).toLocaleString();
  const { likeCount, viewCount } = statistics !== "" ? statistics : {};
  // {Object.keys(statistics).length > 0 && <RenderComponent />}
  console.log(snippet);
  const {
    channelId,
    channelTitle,
    publishedAt,
    title,
    thumbnails: { high: url },
  } = snippet;

  const styling =
    kind === "youtube#channel"
      ? "w-40 h-40 rounded-full flex items-center justify-center"
      : "w-full h-full";

  const publishedDate = generatePublishedDate(publishedAt);
  const timeDifference = formatTimeDifference(currentDate, publishedDate);
  console.log("duzina keysa", Object.keys(statistics).length);
  return (
    <Link to={`/video/${id === null ? "9rVKos-oGnQ" : id}`}>
      <div className="flex flex-col cursor-pointer">
        {Object.keys(statistics).length === 0 && (
          <>
            <div className="h-[200px] flex justify-center items-center ">
              <img src={url.url} alt={title} className={styling} />
            </div>
            <div className="bg-stone-900 h-[150px] flex flex-col p-2 justify-center gap-2">
              <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
              <h3 className="text-stone-400">{channelTitle}</h3>
              <h4>{timeDifference}</h4>
            </div>
          </>
        )}
        {Object.keys(statistics).length > 0 && (
          <>
            <div className="h-full w-full">
              <div className="h-full flex justify-center items-center ">
                <img src={url.url} alt={title} className={styling} />
              </div>
              <h2
                className="text-lg py-2"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h2>
              <div className="flex justify-between pb-6">
                <span>{viewCount} views</span>
                <div className="flex gap-8">
                  <div className="flex gap-2 items-center">
                    <SlLike />
                    <span>{likeCount}</span>
                    <SlDislike />
                  </div>
                  <div className="flex gap-2 items-center">
                    <PiShareFatLight />
                    <span>SHARE</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <BsDownload />
                    <span>Download</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default VideoCard;
