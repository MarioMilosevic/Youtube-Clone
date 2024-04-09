import Categories from "./components/Categories";
import Videos from "./components/Videos";
import { ResponseType } from "axios";

type YoutubeExplorerTypes = {
  updateSelectedCategory: (category: string) => void;
  updateUrl: (input: string) => void;
  selectedCategory: string;
  responseData: ResponseType[];
  updateSelectedVideo: (id: string) => void;
  videoSelected: () => void;
  isVideoSelected:boolean
};

const YoutubeExplorer = ({
  updateSelectedCategory,
  updateUrl,
  selectedCategory,
  responseData,
  updateSelectedVideo,
  videoSelected,
  isVideoSelected
}: YoutubeExplorerTypes) => {
  return (
    <>
      <Categories
        updateSelectedCategory={updateSelectedCategory}
        updateUrl={updateUrl}
      />
      <Videos
        selectedCategory={selectedCategory}
        responseData={responseData}
        updateSelectedVideo={updateSelectedVideo}
        videoSelected={videoSelected}
        isVideoSelected={isVideoSelected}
      />
    </>
  );
};

export default YoutubeExplorer;
