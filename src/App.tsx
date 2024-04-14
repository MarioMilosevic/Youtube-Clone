import { useEffect, useState } from "react";
import { ResponseType } from "axios";
import { fetchVideosList } from "./utils/fetch";
// import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import YoutubeExplorer from "./components/YoutubeExplorer";
import VideoInformation from "./components/VideoInformation";
import Mario from "./components/Mario";

export type UpdateUrlFn = Dispatch<SetStateAction<string>>;
// import Videos from "./components/Videos"
// const router = createBrowserRouter([
//   { path: "/", element:<App/> },
//   { path: "/video", element:<YoutubeExplorer/> },
//   { path: "/", element:"" },

// ])

function App() {
  const [responseData, setResponseData] = useState<ResponseType[]>([]);
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

  const updateUrl: UpdateUrlFn = (input: string) => {
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
                <YoutubeExplorer
                  updateUrl={updateUrl}
                  responseData={responseData}
                />
              }
            />
            {/* <Route path="/video/:videoId" element={<Mario />} /> */}
            <Route path="/video/:videoId" element={<VideoInformation />} />
            {/* <Route path="*" element={<Error/> }/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
