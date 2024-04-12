import Categories from "./components/Categories";
import Videos from "./components/Videos";
import { useState, useEffect } from "react";
import { ResponseType } from "axios";
import { fetchVideosList } from "./utils/fetch";
import Wrapper from "./components/Wrapper";

type YoutubeExplorerTypes = {
  updateSelectedCategory: (category: string) => void;
  updateUrl: (input: string) => void;
  selectedCategory: string;
  responseData: ResponseType[];
  updateSelectedVideo: (id: string) => void;
  videoSelected: () => void;
  isVideoSelected: boolean;
};

const YoutubeExplorer = ({responseData,updateUrl}) => {
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
