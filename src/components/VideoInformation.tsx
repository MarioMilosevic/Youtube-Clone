import React, { useEffect, useState } from "react";
import { ResponseType } from "axios";
import VideoCard from "./VideoCard";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router";
import Comment from "./Comment";
import {
  fetchVideoComments,
  fetchVideoDetails,
  fetchSuggestedVideos,
} from "../utils/fetch";
import Loading from "./Loading";
type VideoInformationTypes = {
  responseData: ResponseType[];
  selectedVideo: ResponseType;
  isVideoSelected: boolean;
};
// const VideoInformation = ({}: VideoInformationTypes) => {

const VideoInformation = () => {
  const [videoDetails, setVideoDetails] = useState();
  const [videoComments, setVideoComments] = useState();
  // const [suggestedVideos, setSuggestedVideos] = useState();
  const { videoId } = useParams();
  console.log(videoId);


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
        const response = await fetchVideoComments(videoId);
        setVideoComments(response);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [videoId]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetchSuggestedVideos(videoId)
  //       setSuggestedVideos(response)
  //     } catch (error) {
  //       console.error("Errof fetching data", error)
  //     }
  //   }
  //   fetchData()
  // }, [videoId])
  // NIJE JOS STIGLO NA RED ///////////////////////////////////////////////////////////////////////////////

  if (!videoDetails || !videoComments) {
    return <Loading />;
  }

  const { items: videoDetailsItems } = videoDetails || {};
  const [
    {
      snippet: {
        thumbnails: {
          high: { url },
        },
        title: videoTitle,
      },
      statistics: { likeCount, viewCount },
    },
  ] = videoDetailsItems;

  const { items: videoCommentItems } = videoComments;

  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full pb-8">
        <VideoCard
          likeCount={likeCount}
          viewCount={viewCount}
          title={videoTitle}
          url={url}
        />
        {videoCommentItems.map((comment, index) => {
          const { snippet } = comment;
          return <Comment key={index} snippet={snippet} />;
        })}
      </main>
      <aside className="w-[20%] bg-blue-500">Mario</aside>
    </div>
  );
};

export default VideoInformation;
