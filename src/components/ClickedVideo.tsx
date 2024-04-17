import { SlLike, SlDislike } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import { formatString } from "../utils/HelperFunctions";
import ReactPlayer from "react-player";

type ClickedVideoType = {
  videoId: string | undefined;
  statistics: {
    viewCount: string;
    likeCount: string;
  };
  snippet: {
    title:string
  }
};

const ClickedVideo = ({ videoId, statistics, snippet }:ClickedVideoType) => {
  const { likeCount, viewCount } = statistics;
  const {title } = snippet
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="h-full w-full">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          width="100%"
          height="640px"
          className="react-player"
          controls
        />
        <h2
          className="text-lg py-2"
          dangerouslySetInnerHTML={{ __html: title }}
        >
        </h2>
        <div className="flex justify-between pb-6">
          <span>{formatString(viewCount)} views</span>
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <SlLike />
              <span>{formatString(likeCount)}</span>
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
    </div>
  );
};

export default ClickedVideo;
