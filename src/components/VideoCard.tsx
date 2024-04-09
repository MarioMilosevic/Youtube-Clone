import { ResponseType } from "axios";
import { useState } from "react";
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
  isVideoSelected:boolean
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
  videoSelected
}: VideoCardTypes) => {
  // const [isSelected, setIsSelected] = useState(false);
  const currentDate = new Date();

  const styling =
    kind === "youtube#channel"
      ? "w-40 h-40 rounded-full flex items-center justify-center"
      : "w-full h-full";

  
  const publishedDate = new Date(publishTime?.substring(0, 10));
  
    const timeDifference = formatTimeDifference(currentDate, publishedDate)
  


  const videoHandler = (id: string | undefined) => {
    const clickedVideo = responseData.find(
      (result) => result.id.videoId === id
    );
    updateSelectedVideo(clickedVideo);
    videoSelected();
  };

  console.log(publishedDate)

  return (
    <>
      {!isVideoSelected && <div
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
        }
      
      {isVideoSelected && 
          <div className="flex flex-col cursor-pointer border">
            <div className="h-[1000]">
              <img src={url} alt="Some img alt" className={styling} />
            </div>
            <div className="bg-black ">
              <p>Odje treba da ide neki tekst</p>
              <div>
                <span>1.572.236 views</span>
                <span>19.638</span>
                <span>Share</span>
                <span>Download</span>
              </div>
            </div>
          </div> }
       
    </>
  );
};

export default VideoCard;
