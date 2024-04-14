import { useEffect, useState } from "react";
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

const VideoInformation = () => {
  const [videoDetails, setVideoDetails] = useState();
  const [videoComments, setVideoComments] = useState();
  const [suggestedVideos, setSuggestedVideos] = useState();
  const { videoId } = useParams();
  console.log(videoId);

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
  const { items: videoDetailsItems } = videoDetails || {};
  const [{ snippet, statistics }] = videoDetailsItems;
  console.log("snippet iz video info",snippet)
  const { items: videoCommentItems } = videoComments;
  const { items: suggestedVideoItems } = suggestedVideos;
  const videoCardId = {videoId:videoId}
  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full pb-8">
        <VideoCard
          key={videoCardId}
          snippet={snippet}
          id={videoCardId}
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
      <aside>
        {suggestedVideoItems.map((item) => {
          const {
            id: { videoId: suggestedVideoId },
            snippet,
          } = item;
          return (
            <VideoCard
              key={suggestedVideoId}
              id={suggestedVideoId}
              snippet={snippet}
              statistics={""}
            />
          );
        })}
      </aside>
    </div>
  );
};

export default VideoInformation;
