import { ResponseType } from "axios";
import { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { FaShare } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { generatePublishedDate } from "../utils/HelperFunctions";
import { currentDate } from "../utils/HelperFunctions";
import { formatTimeDifference } from "../utils/HelperFunctions";
import { PiShare, PiShareFatLight } from "react-icons/pi";
import { Link } from "react-router-dom";

// type VideoCardTypes = {
//   updateSelectedVideo: (id: string) => void;
//   responseData: ResponseType[];
//   selectVideo: () => void;
//   title: string;
//   description: string;
//   channelTitle: string;
//   kind: string;
//   publishTime: string;
//   url: string;
//   videoId: string;
//   likeCount: number;
//   viewCount: number;
//   isVideoSelected: boolean;
// };

const VideoCard = ({
  title,
  channelTitle,
  kind,
  publishTime,
  url,
  responseData,
  videoSelected,
  videoId,
}: VideoCardTypes) => {
  // const views: string = parseInt(viewCount).toLocaleString();
  // const likes: string = parseInt(likeCount).toLocaleString();

  const styling =
    kind === "youtube#channel"
      ? "w-40 h-40 rounded-full flex items-center justify-center"
      : "w-full h-full";
  const publishedDate = generatePublishedDate(publishTime);

  const timeDifference = formatTimeDifference(currentDate, publishedDate);

  const videoHandler = (id: string | undefined) => {
    const clickedVideo = responseData.find(
      (result) => result.id.videoId === id
    );
    // updateSelectedVideo(clickedVideo);
    videoSelected();
  };

  return (
    <Link to={`/video/${videoId}`}>
      <div
        className="flex flex-col cursor-pointer bg-white"
        onClick={() => videoHandler(videoId)}
      >
        <div className="h-[200px] flex justify-center items-center ">
          <img src={url} alt="Some img alt" className={styling} />
        </div>
        <div className="bg-stone-900 h-[150px] flex flex-col p-2 justify-center gap-2">
          <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
          <h3 className="text-stone-400">{channelTitle}</h3>
          <h4>{timeDifference}</h4>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
