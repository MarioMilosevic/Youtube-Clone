import VideoCard from "./VideoCard";
import { ResponseType } from "axios";
type ContentTypes = {
  selectedCategory: string;
  responseData: ResponseType[];
  updateSelectedVideo: (id: string) => void;
  videoSelected: () => void;
  isVideoSelected: boolean;
};

const Content = ({
  selectedCategory,
  responseData,
  updateSelectedVideo,
  videoSelected,
  isVideoSelected
}: ContentTypes) => {
  console.log(responseData);
  return (
    <div className="flex flex-col flex-1 pl-2">
      <p className="text-3xl font-semibold">
        {selectedCategory} <span className="text-[#ff0000]">videos</span>
      </p>
      <main className="pt-12 grid gap-4 grid-cols-4">
        {responseData.map((el) => {
          const {
            id: { kind: kindID, channelId, videoId },
            kind,
            snippet: {
              publishedAt,
              channelId: channelIDSnippet,
              title,
              description,
              channelTitle,
              liveBroadcastContent,
              publishTime,
              thumbnails: { default: defaultThumbnail, high: { url}, medium },
            },
          } = el;

          return (
            <VideoCard
              key={videoId || channelId}
              videoId={videoId}
              kind={kindID}
              responseData={responseData}
              updateSelectedVideo={updateSelectedVideo}
              publishTime={publishTime}
              title={title}
              channelTitle={channelTitle}
              description={description}
              url={url}
              videoSelected={videoSelected}
              isVideoSelected={isVideoSelected }
            />
          );
        })}
      </main>
    </div>
  );
};

export default Content;

{
  /* {responseData.map((el) => {
          const {
            id: { videoId, channelId },
          } = el;
          return (
            <VideoCard
              key={videoId || channelId}
              el={el}
              responseData={responseData}
              updateSelectedVideo={updateSelectedVideo}
              videoSelected={videoSelected}
            />
          );
        })} */
}
