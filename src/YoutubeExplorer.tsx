import Categories from "./components/Categories";
import Videos from "./components/Videos";
import { useState, useEffect } from "react";
import { ResponseType } from "axios";
import { fetchVideosList } from "./utils/fetch";

type YoutubeExplorerTypes = {
  updateSelectedCategory: (category: string) => void;
  updateUrl: (input: string) => void;
  selectedCategory: string;
  responseData: ResponseType[];
  updateSelectedVideo: (id: string) => void;
  videoSelected: () => void;
  isVideoSelected: boolean;
};

const YoutubeExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [responseData, setResponseData] = useState<ResponseType[]>([]);
  const [url, setUrl] = useState("New");
  const [isVideoSelected, setIsVideoSelected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items } = await fetchVideosList(url);
        setResponseData(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);

  const updateSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  // const updateSelectedVideo = (id: SetStateAction<ResponseType>) => {
  //   setSelectedVideo(id);
  // };

  const updateUrl = (input: string) => {
    setUrl(input);
  };

  const videoSelected = () => {
    setIsVideoSelected(true);
  };

  const videoNotSelected = () => {
    setIsVideoSelected(false);
  };
  return (
    <>
      <Categories
        updateSelectedCategory={updateSelectedCategory}
        updateUrl={updateUrl}
      />
      <Videos
        selectedCategory={selectedCategory}
        responseData={responseData}
      />
    </>
  );
};

export default YoutubeExplorer;
