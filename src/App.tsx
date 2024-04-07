import { useEffect, useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import { ResponseType } from "axios";
import { fetchFromAPI } from "./utils/fetch";
import YoutubeExplorer from "./YoutubeExplorer";
import VideoInformation from "./components/VideoInformation";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [responseData, setResponseData] = useState<ResponseType[]>([]);
  const [url, setUrl] = useState("New");
  const [isVideoSelected, setIsVideoSelected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items } = await fetchFromAPI(url);
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

  const updateUrl = (input: string) => {
    setUrl(input);
  };

  return (
    <>
      <Header updateUrl={updateUrl} />
      <Wrapper>
        {!isVideoSelected && (
          <>
            <YoutubeExplorer
              selectedCategory={selectedCategory}
              updateSelectedCategory={updateSelectedCategory}
              updateUrl={updateUrl}
              responseData={responseData}
            />
          </>
        )}
      </Wrapper>
    </>
  );
}

export default App;
