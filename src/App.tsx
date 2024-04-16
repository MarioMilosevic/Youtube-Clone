import { useEffect, useState } from "react";
import { fetchVideosList } from "./utils/fetch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VideoSearchType } from "./types/types";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import VideoInformation from "./components/VideoInformation";
import Channel from "./components/Channel";
import Error from "./components/Error";
import {
  initialCategoriesState,
  InitialCategoriesType,
} from "./utils/initialState";

function App() {
  const [responseData, setResponseData] = useState<
    VideoSearchType[] | undefined
  >();
  const [url, setUrl] = useState("New");
  const [icons, setIcons] = useState(initialCategoriesState);

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

  const updateIcons = (icons: InitialCategoriesType[]) => {
    setIcons(icons);
  };

  // const resetCategories = () => {
  //   setIcons(initialCategoriesState)
  // }
  // u Headeru moram da proslijedim funkciju
  // u HomePageu moram da proslijedim ikone i funkciju koja ce da ih apdejtuje
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Header updateIcons={updateIcons} updateUrl={updateUrl} />}
          >
            <Route
              index
              element={
                responseData !== undefined ? (
                  <HomePage
                    icons={icons}
                    updateIcons={updateIcons}
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
