import { generatePublishedDate } from "../utils/HelperFunctions";
import { currentDate } from "../utils/HelperFunctions";
import { formatTimeDifference } from "../utils/HelperFunctions";
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
      default: {
        url: string;
      };
      high: {
        url: string;
      };
    };
  };
};

const VideoCard = ({ snippet, id }: VideoCardType) => {
  const cardId = id.videoId || id.channelId || "9rVKos-oGnQ";
  const route = id.channelId ? "channel" : "video";
  const { channelTitle, publishedAt, title, thumbnails } = snippet;

  const styling = id.channelId
    ? "w-40 h-40 rounded-full flex items-center justify-center"
    : "w-full h-full";

  const truncatedTitle = title.length > 50 ? title.slice(0, 50) + "..." : title;
  const publishedDate = generatePublishedDate(publishedAt);
  const timeDifference = formatTimeDifference(currentDate, publishedDate);

  return (
    <div className="flex flex-col cursor-pointer">
      <Link to={`/${route}/${cardId === undefined ? "9rVKos-oGnQ" : cardId}`}>
        <div className="h-[200px] flex justify-center items-center">
          <img
            src={
              thumbnails?.high?.url
                ? thumbnails.high.url
                : "https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"
            }
            alt={title}
            className={styling}
          />
        </div>
        <div className="bg-stone-900 min-h-[130px] px-2 justify-center py-1 flex flex-col gap-1">
          <h2 dangerouslySetInnerHTML={{ __html: truncatedTitle }}></h2>
          <h3 className="text-stone-400">{channelTitle}</h3>
          <h4>{timeDifference}</h4>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;

