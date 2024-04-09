import { ResponseType } from "axios";
import { useState } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { FaShare } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { formatTimeDifference } from "../utils/HelperFunctions";
type VideoCardTypes = {
  updateSelectedVideo: (id: string) => void;
  responseData: ResponseType[];
  selectVideo: () => void;
  title: string;
  description: string;
  channelTitle: string;
  kind: string;
  publishTime: string;
  url: string;
  videoId: string;
  likeCount: number;
  viewCount: number;
  isVideoSelected: boolean;
};

const VideoCard = ({
  updateSelectedVideo,
  selectVideo,
  title,
  description,
  channelTitle,
  kind,
  publishTime,
  url,
  videoId,
  responseData,
  //
  likeCount,
  viewCount,
  isVideoSelected,
  videoSelected,
}: VideoCardTypes) => {
  // const [isSelected, setIsSelected] = useState(false);
  const currentDate = new Date();

  const styling =
    kind === "youtube#channel"
      ? "w-40 h-40 rounded-full flex items-center justify-center"
      : "w-full h-full";

  const publishedDate = new Date(publishTime?.substring(0, 10));

  const timeDifference = formatTimeDifference(currentDate, publishedDate);

  const videoHandler = (id: string | undefined) => {
    const clickedVideo = responseData.find(
      (result) => result.id.videoId === id
    );
    updateSelectedVideo(clickedVideo);
    videoSelected();
  };

  return (
    <>
      {!isVideoSelected && (
        <div
          className="flex flex-col cursor-pointer"
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
      )}

      {isVideoSelected && (
        <div className="flex flex-col">
          <div className="h-[1000] cursor-pointer">
            <img src={url} alt="Some img alt" className={styling} />
          </div>
          <div className="bg-black">
            <p className="text-xl pb-2">
              Live: Solar eclipse in New York state - Full coverage
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg">2,347 views</span>
              <div className="flex gap-4 text-lg">
                <div className="flex gap-2 items-center">
                  <SlLike className="cursor-pointer" />
                  <span>1,099</span>
                  <SlDislike className="cursor-pointer" />
                </div>
                <div className="flex items-center gap-2">
                  <FaShare className="cursor-pointer" />
                  <span>Share</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsDownload className="cursor-pointer" />
                  <span>Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
