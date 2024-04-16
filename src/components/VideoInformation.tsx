import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { CommentItem } from "../types/types";
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
  const [videoComments, setVideoComments] = useState([]);
  const [suggestedVideos, setSuggestedVideos] = useState();
  const { videoId }: { videoId?: string } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (videoId) {
          const [details, comments, suggested] = await Promise.all([
            fetchVideoDetails(videoId),
            fetchVideoComments(videoId),
            fetchSuggestedVideos(videoId),
          ]);
          setVideoDetails(details);
          setVideoComments(comments);
          setSuggestedVideos(suggested);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [videoId]);

  if (!videoDetails || !videoComments || !suggestedVideos) {
    return <Loading />;
  }
  const { items: videoCommentItems } = videoComments;
  const { items: suggestedVideoItems } = suggestedVideos;
 
  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full ">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} width="100%" height="640px" className="react-player" controls/>
        {videoCommentItems.map((comment:CommentItem) => {
          const {
            id,
            snippet: {
              topLevelComment: { snippet },
            },
          } = comment;
          return <Comment key={id} snippet={snippet} />;
        })}
      </main>
      <aside>
        {suggestedVideoItems.map((item) => {
          const { id, snippet } = item;
          return (
            <VideoCard
              key={id.videoId}
              id={id}
              snippet={snippet}
              statistics={{ likeCount: "", viewCount: "" }}
            />
          );
        })}
      </aside>
    </div>
  );
};

export default VideoInformation;

