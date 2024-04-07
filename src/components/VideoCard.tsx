const VideoCard = ({ el }) => {
  const currentDate = new Date();
  const {
    id: { kind: kindID, channelId },
    kind,
    snippet: {
      publishedAt,
      channelId: channelIDSnippet,
      title,
      description,
      channelTitle,
      liveBroadcastContent,
      publishTime,
      thumbnails: { default: defaultThumbnail, high, medium },
    },
  } = el;
  const styling =
    kindID === "youtube#channel"
      ? "w-40 h-40 rounded-full flex items-center justify-center"
      : "w-full h-full";
  const publishedDate = new Date(publishTime.substring(0, 10));

  function formatTimeDifference(curDate, pubDate) {
    const timeDifference = curDate.getTime() - pubDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      return "today";
    } else if (daysDifference === 1) {
      return "1 day ago";
    } else if (daysDifference < 7) {
      return `${daysDifference} days ago`;
    } else if (daysDifference <= 30) {
      const weeksDifference = Math.floor(daysDifference / 7);
      return `${weeksDifference} week${weeksDifference > 1 ? "s" : ""} ago`;
    } else if (daysDifference <= 365) {
      const monthsDifference = Math.floor(daysDifference / 30);
      return `${monthsDifference} month${monthsDifference > 1 ? "s" : ""} ago`;
    } else {
      const yearsDifference = Math.floor(daysDifference / 365);
      return `${yearsDifference} year${yearsDifference > 1 ? "s" : ""} ago`;
    }
  }

  return (
    <div className="flex flex-col justify-between ">
      <div className="h-[200px] flex justify-center items-center cursor-pointer">
        <img src={high.url} alt="Some img alt" className={styling} />
      </div>
      <div className="bg-stone-900 h-[150px] flex flex-col gap-1 p-2 justify-center gap-2">
        <h2>{title}</h2>
        <h3 className="text-stone-400">{channelTitle}</h3>
        <h4>{formatTimeDifference(currentDate, publishedDate)}</h4>
      </div>
    </div>
  );
};

export default VideoCard;
