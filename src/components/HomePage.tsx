import Categories from "./Categories";
import Videos from "./Videos";
import Wrapper from "./Wrapper";
import { useState } from "react";
import { VideoSearchType } from "../types/types";
import { InitialCategoriesType } from "../utils/initialState";

type HomePageTypes = {
  updateUrl: (input: string) => void;
  responseData: VideoSearchType[];
  icons: InitialCategoriesType[];
  updateIcons: (icons: InitialCategoriesType[]) => void;
};

const HomePage = ({
  icons,
  updateIcons,
  responseData,
  updateUrl,
}: HomePageTypes) => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const updateSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Wrapper>
        <Categories
          icons={icons}
          updateIcons={updateIcons}
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

export default HomePage;
