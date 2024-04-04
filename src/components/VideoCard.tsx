import slika from "../assets/probno.jpg";

const VideoCard = ({ el }) => {
  console.log(el);
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

  return (
    <div className="flex flex-col justify-between h-[300px]">
      <div className="h-[200px] flex justify-center items-center">
        <img src={high.url} alt="Some img alt" className={styling} />
      </div>
      <div className="bg-stone-900 h-[100px] flex flex-col gap-1 p-2">
        <h2>{title}</h2>
        <h3 className="text-stone-400">{channelTitle}</h3>
        <h4>2 years ago</h4>
      </div>
    </div>
  );
};

export default VideoCard;
