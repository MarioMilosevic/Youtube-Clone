import Categories from "./components/Categories";
import Videos from "./components/Videos";
import { ResponseType } from "axios";

type YoutubeExplorerTypes = {
  updateSelectedCategory: (category: string) => void;
  updateUrl: (input: string) => void;
  selectedCategory: string;
  responseData: ResponseType[];
  updateSelectedVideo: (id: string) => void;
};

const YoutubeExplorer = ({
  updateSelectedCategory,
  updateUrl,
  selectedCategory,
  responseData,
  updateSelectedVideo
}: YoutubeExplorerTypes) => {
  console.log(responseData)
  return (
    <>
      <Categories
        updateSelectedCategory={updateSelectedCategory}
        updateUrl={updateUrl}
      />
      <Videos selectedCategory={selectedCategory} responseData={responseData} updateSelectedVideo={updateSelectedVideo } />
    </>
  );
};

export default YoutubeExplorer;
