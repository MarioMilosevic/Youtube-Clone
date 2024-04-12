import Categories from "./Categories";
import Videos from "./Videos";
import { useState} from "react";
import { ResponseType } from "axios";
import Wrapper from "./Wrapper";

type YoutubeExplorerTypes = {
  updateSelectedCategory: (category: string) => void;
  updateUrl: (input: string) => void;
  selectedCategory: string;
  responseData: ResponseType[];
  updateSelectedVideo: (id: string) => void;
  videoSelected: () => void;
  isVideoSelected: boolean;
};

const YoutubeExplorer = ({ responseData, updateUrl }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const updateSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Wrapper>
        <Categories
          updateSelectedCategory={updateSelectedCategory}
          updateUrl={updateUrl}
        />
        <Videos
          selectedCategory={selectedCategory}
          responseData={responseData}
        />
      </Wrapper>
    </>
  );
};

export default YoutubeExplorer;
