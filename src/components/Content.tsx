import VideoCard from "./VideoCard";
import { ResponseType } from "axios";
type ContentTypes = {
  selectedCategory: string;
  responseData:ResponseType
};

const Content = ({ selectedCategory, responseData }: ContentTypes) => {
  return (
    <div className=" flex flex-col flex-1 pl-2">
      <p className="text-3xl font-semibold">
        {selectedCategory} <span className="text-[#ff0000]">videos</span>
      </p>
      <main className="pt-12 grid gap-4 grid-cols-4">
        {responseData.map(el => {
          
          return <VideoCard key={el.id.videoId || el.id.channelId} el={el } />
        })}
      
      </main>
    </div>
  );
};

export default Content;
