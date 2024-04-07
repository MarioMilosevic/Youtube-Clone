import Categories from "./components/Categories";
import Videos from "./components/Videos";

type YoutubeExplorerTypes = {
  updateSelectedCategory: (category: string) => void;
  updateUrl: (input: string) => void;
  selectedCategory: string;
  responseData: ResponseType[];
};

const YoutubeExplorer = ({
  updateSelectedCategory,
  updateUrl,
  selectedCategory,
  responseData,
}: YoutubeExplorerTypes) => {
  return (
    <>
      <Categories
        updateSelectedCategory={updateSelectedCategory}
        updateUrl={updateUrl}
      />
      <Videos selectedCategory={selectedCategory} responseData={responseData} />
    </>
  );
};

export default YoutubeExplorer;
