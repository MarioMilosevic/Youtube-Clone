import Categories from "./Categories";
import Videos from "./Videos";
import { useState } from "react";
import Wrapper from "./Wrapper";
import { VideoSearchType } from "../types/types";
import { UpdateUrlFn } from "../App";
import { ResponseType } from "axios";

type YoutubeExplorerTypes = {
  updateUrl: UpdateUrlFn;
  responseData: ResponseType;
};

const YoutubeExplorer = ({ responseData, updateUrl }: YoutubeExplorerTypes) => {
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
