import React, { useEffect, useState } from "react";
import { ResponseType } from "axios";
import VideoCard from "./VideoCard";
import ReactPlayer from "react-player/youtube";
import { fetchVideoComments, fetchVideoDetails } from "../utils/fetch";
import Mario from "./Mario";
type VideoInformationTypes = {
  responseData: ResponseType[];
  selectedVideo: ResponseType;
  isVideoSelected: boolean;
};

const VideoInformation = ({
  responseData,
  selectedVideo,isVideoSelected
}: VideoInformationTypes) => {
  const [videoDetails, setVideoDetails] = useState();

  console.log("proslijedjeno iz propsa", responseData);
  console.log("proslijedjeno iz propsa", selectedVideo);
  const {
    id: { videoId },
    snippet: {
      title,
      thumbnails: { high },
    },
  } = selectedVideo;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchVideoDetails(videoId);
        setVideoDetails(response);
        console.log("ovo odje je response", response);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [videoId]);

  console.log("ovo odje je video detalj", videoDetails);

  if (!videoDetails || !videoDetails.items || videoDetails.items.length === 0) {
    return <div>Loading...</div>
  }

  const { items } = videoDetails || {};
  const [
    {
      kind,
      id,
      snippet: {
        thumbnails: {
          high: { url },
        },
        title: videoTitle
      },
      contentDetails,
      statistics: { commentCount, favoriteCount, likeCount, viewCount },
    },
  ] = items ? [items[0]] : [{}]
  // iskoristit VideoCard za glavni video i ostale sve videee a za kanal napravit posebnu komponentu
  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full ">
        <VideoCard likeCount={likeCount} viewCount={viewCount} title={videoTitle} url={url} isVideoSelected={isVideoSelected} />
        {/* <div className="border">
          <ReactPlayer url={high.url}/> 
          <img
            src={high.url}
            alt="youtube picture"
            className="w-full h-[700px]"
          />
        </div> */}
        { /* POGLEDAT KASNIJE !!!!!!!!!!!!!!!!!!!!!!! <h2
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-lg py-1"
        ></h2> */}
      </main>
      <aside className="w-[20%] bg-blue-500">Mario</aside>
    </div>
  );
};

export default VideoInformation;
