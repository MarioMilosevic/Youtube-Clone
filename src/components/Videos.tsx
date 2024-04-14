import VideoCard from "./VideoCard";
// import { VideoSearchType } from "../types/types";
import { ResponseType } from "axios";
type ContentTypes = {
  selectedCategory: string;
  // responseData: VideoSearchType;
  responseData: ResponseType[];
};

const Videos = ({ selectedCategory, responseData }: ContentTypes) => {
  return (
    <div className="flex flex-col flex-1 pl-2">
      <p className="text-3xl font-semibold">
        {selectedCategory} <span className="text-[#ff0000]">videos</span>
      </p>
      <main className="pt-12 grid gap-4 grid-cols-4">
        {responseData.map((el) => {
          console.log(el)
          const { id, snippet } = el;
          return (
            <VideoCard
              key={id.videoId || id.channelId}
              snippet={snippet}
              id={id}
              statistics={""}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Videos;
