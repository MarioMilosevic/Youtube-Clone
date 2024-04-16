import VideoCard from "./VideoCard";
import { VideoSearchType } from "../types/types";

type ContentTypes = {
  selectedCategory: string;
  responseData: VideoSearchType[];
};

const Videos = ({ selectedCategory, responseData }: ContentTypes) => {
  return (
    <div className="flex flex-col flex-1 pl-2">
      <p className="text-3xl font-semibold">
        {selectedCategory} <span className="text-[#ff0000]">videos</span>
      </p>
      <main className="pt-12 grid gap-4 grid-cols-4">
        {responseData.map((el) => {
          const { id, snippet } = el ;
          return (
            <VideoCard
              key={id.videoId || id.channelId}
              snippet={snippet}
              id={id}
              statistics={{likeCount:"", viewCount:""}}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Videos;
