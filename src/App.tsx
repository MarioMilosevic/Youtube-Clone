import { SetStateAction, useEffect, useState } from "react";
import { ResponseType } from "axios";
import { fetchVideosList } from "./utils/fetch";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import YoutubeExplorer from "./YoutubeExplorer";
import VideoInformation from "./components/VideoInformation";
// import Videos from "./components/Videos"
import Mario from "./components/Mario";
// const router = createBrowserRouter([
//   { path: "/", element:<App/> },
//   { path: "/video", element:<YoutubeExplorer/> },
//   { path: "/", element:"" },

// ])

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<YoutubeExplorer />} />
            <Route path="/video/:videoId" element={<Mario />} />
            {/* <Route path="*" element={<Error/> }/> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Header updateUrl={updateUrl} videoNotSelected={videoNotSelected} /> */}
    </>
  );
}

export default App;
