import { useEffect, useState } from "react";
import { ResponseType } from "axios";
import { fetchVideosList } from "./utils/fetch";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import YoutubeExplorer from "./YoutubeExplorer";
import VideoInformation from "./components/VideoInformation";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [responseData, setResponseData] = useState<ResponseType[]>([]);
  const [url, setUrl] = useState("New");
  const [isVideoSelected, setIsVideoSelected] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<ResponseType>({});

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

  const updateSelectedVideo = (id: string) => {
    setSelectedVideo(id);
  };

  const updateUrl = (input: string) => {
    setUrl(input);
  };

  const selectVideo = () => {
    setIsVideoSelected(true)
  }

  return (
    <>
      <Header updateUrl={updateUrl} />
      <Wrapper>
        {isVideoSelected ? (
          <VideoInformation
            responseData={responseData}
            selectedVideo={selectedVideo}
            />
          ) : (
            <YoutubeExplorer
            selectVideo={selectVideo}
            updateSelectedVideo={updateSelectedVideo}
            selectedCategory={selectedCategory}
            updateSelectedCategory={updateSelectedCategory}
            updateUrl={updateUrl}
            responseData={responseData}
          />
        )}
      </Wrapper>
    </>
  );
}

export default App;
