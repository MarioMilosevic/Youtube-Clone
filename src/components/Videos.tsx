import VideoCard from "./VideoCard";
import { ResponseType } from "axios";
type ContentTypes = {
  selectedCategory: string;
  responseData: ResponseType[];
  updateSelectedVideo: (id: string) => void;
  videoSelected: () => void;
  isVideoSelected: boolean;
};

const Videos = ({ selectedCategory, responseData }: ContentTypes) => {
  console.log(responseData);
  return (
    <div className="flex flex-col flex-1 pl-2">
      <p className="text-3xl font-semibold">
        {selectedCategory} <span className="text-[#ff0000]">videos</span>
      </p>
      <main className="pt-12 grid gap-4 grid-cols-4">
        {responseData.map((el) => {
          console.log(el);
          const {
            id: { channelId, videoId },
            kind,
            snippet,
          } = el;

          return (
            <VideoCard
              key={videoId || channelId}
              snippet={snippet}
              id={videoId || channelId }
              kind={kind}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Videos;
