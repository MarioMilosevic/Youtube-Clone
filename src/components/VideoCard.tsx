import { SlLike, SlDislike } from "react-icons/sl";
import { BsDownload } from "react-icons/bs";
import { generatePublishedDate } from "../utils/HelperFunctions";
import { currentDate } from "../utils/HelperFunctions";
import { formatTimeDifference } from "../utils/HelperFunctions";
import { PiShareFatLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export type VideoCardType = {
  id: {
    videoId?: string;
    channelId?: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    publishedAt: string;
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    likeCount: string;
    viewCount: string;
  };
};

const VideoCard = ({ snippet, id, statistics }: VideoCardType) => {
  const { likeCount = "", viewCount = "" } =
    Object.keys(statistics).length !== 0 ? statistics : {};

  const cardId = id.videoId || id.channelId || "9rVKos-oGnQ";
  const route = id.channelId? "channel" : "video"

  const views =
    viewCount !== undefined ? parseInt(viewCount).toLocaleString() : "";
  const likes =
    likeCount !== undefined ? parseInt(likeCount).toLocaleString() : "";
  
  const {
    channelTitle,
    publishedAt,
    title,
    thumbnails: {
      high: { url },
    },
  } = snippet;
  const styling = id.channelId
    ? "w-40 h-40 rounded-full flex items-center justify-center"
    : "w-full h-full";

  const truncatedTitle = title.length > 50 ? title.slice(0, 50) + "..." : title;
  const publishedDate = generatePublishedDate(publishedAt);
  const timeDifference = formatTimeDifference(currentDate, publishedDate);

  return (
    <div className="flex flex-col cursor-pointer">
      {Object.keys(statistics).length === 0 && (
        <Link to={`/${route}/${cardId === undefined ? "9rVKos-oGnQ" : cardId}`}>
          <div className="h-[200px] flex justify-center items-center">
            <img src={url} alt={title} className={styling} />
          </div>
          <div className="bg-stone-900 min-h-[130px] px-2 justify-center py-1 flex flex-col gap-1">
            <h2 dangerouslySetInnerHTML={{ __html: truncatedTitle }}></h2>
            <h3 className="text-stone-400">{channelTitle}</h3>
            <h4>{timeDifference}</h4>
          </div>
        </Link>
      )}

      {Object.keys(statistics).length > 0 && (
        <Link
          to={`/${route}/${
            cardId === undefined ? "UCH6dFAKXrH-gj1cvoHJJUgA" : cardId
          }`}
        >
          <div className="h-full w-full">
            <div className="h-full flex justify-center items-center ">
              <img src={url} alt={title} className={styling} />
            </div>
            <h2
              className="text-lg py-2"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <div className="flex justify-between pb-6">
              <span>{views} views</span>
              <div className="flex gap-8">
                <div className="flex gap-2 items-center">
                  <SlLike />
                  <span>{likes}</span>
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
        </Link>
      )}
    </div>
  );
};

export default VideoCard;
