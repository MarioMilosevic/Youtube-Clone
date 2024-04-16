import { useEffect, useState } from "react";
import { fetchVideosList } from "./utils/fetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoSearchType } from "./types/types";
import Header from "./components/Header";
import YoutubeExplorer from "./components/YoutubeExplorer";
import VideoInformation from "./components/VideoInformation";
import Channel from "./components/Channel";
import Error from "./components/Error";

function App() {
  const [responseData, setResponseData] = useState<
    VideoSearchType[] | undefined
  >();
  const [url, setUrl] = useState("New");

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

  const updateUrl = (input: string) => {
    setUrl(input);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header updateUrl={updateUrl} />}>
            <Route
              index
              element={
                responseData !== undefined ? (
                  <YoutubeExplorer
                    updateUrl={updateUrl}
                    responseData={responseData}
                  />
                ) : null
              }
            />
            <Route path="/video/:videoId" element={<VideoInformation />} />
            <Route path="/channel/:channelId" element={<Channel />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
