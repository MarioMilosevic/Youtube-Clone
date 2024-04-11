import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import VideoCard from "../components/VideoCard";
import VideoInformation from "../components/VideoInformation";
import Mario from "../components/Mario";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/video/:idVideo", element: <VideoInformation /> },
  { path: "/mario", element: <Mario /> },
]);
