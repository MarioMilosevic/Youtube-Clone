import React, { useEffect, useState } from "react";
import { ResponseType } from "axios";
import VideoCard from "./VideoCard";
import ReactPlayer from "react-player/youtube";
import Comment from "./Comment";
import { fetchVideoComments, fetchVideoDetails } from "../utils/fetch";
import Loading from "./Loading";
type VideoInformationTypes = {
  responseData: ResponseType[];
  selectedVideo: ResponseType;
  isVideoSelected: boolean;
};

const VideoInformation = ({
  responseData,
  selectedVideo,
  isVideoSelected,
}: VideoInformationTypes) => {
  const [videoDetails, setVideoDetails] = useState();
  const [videoComments,setVideoComments] = useState()
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
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchVideoComments(videoId)
        setVideoComments(response)
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData()
  }, [videoId])

  if (!videoDetails || !videoComments) {
    return <Loading />;
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
        title: videoTitle,
      },
      contentDetails,
      statistics: { commentCount, favoriteCount, likeCount, viewCount },
    },
    // ] = items ? [items[0]] : [{}];
  ] = items



  console.log(videoComments)


  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full pb-8">
        <VideoCard
          likeCount={likeCount}
          viewCount={viewCount}
          title={videoTitle}
          url={url}
          isVideoSelected={isVideoSelected}
          />
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </main>
      <aside className="w-[20%] bg-blue-500">Mario</aside>
    </div>
  );
};

export default VideoInformation;
