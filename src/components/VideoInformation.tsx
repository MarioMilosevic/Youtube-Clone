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
const VideoInformation = () => {
  const [videoDetails, setVideoDetails] = useState();
  const [videoComments, setVideoComments] = useState();
  const [suggestedVideos, setSuggestedVideos] = useState();
  const { videoId } = useParams();
  // console.log(videoId);
  // promise all
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchVideoDetails(videoId);
        setVideoDetails(response);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSuggestedVideos(videoId);
        setSuggestedVideos(response);
      } catch (error) {
        console.error("Errof fetching data", error);
      }
    };
    fetchData();
  }, [videoId]);

  if (!videoDetails || !videoComments || !suggestedVideos) {
    return <Loading />;
  }
  console.log("videoDetails flkajfalfja;l", videoDetails);
  const { kind, items: videoDetailsItems } = videoDetails || {};
  console.log(kind, "KIND");
  const [{ snippet, statistics }] = videoDetailsItems;
  // trebam da nabavim channelID i kind
  const { items: videoCommentItems } = videoComments;

  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full pb-8">
        <VideoCard
          key={videoId}
          // key={videoId || channelId}
          snippet={snippet}
          id={videoId}
          // id={videoId || channelId}
          // kind={kind}
          statistics={statistics}
        />
        {videoCommentItems.map((comment, index) => {
          const {
            snippet: {
              topLevelComment: { snippet },
            },
          } = comment;
          return <Comment key={index} snippet={snippet} />;
        })}
      </main>
      <aside className="w-[20%] bg-blue-500">
        {/* {suggestedVideos.map(video => {
          return <VideoCard />
        })} */}
      </aside>
    </div>
  );
};

export default VideoInformation;
