import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  fetchVideoComments,
  fetchVideoDetails,
  fetchSuggestedVideos,
} from "../utils/fetch";
import { CommentItem } from "../types/types";
import VideoCard from "./VideoCard";
import Comment from "./Comment";
import Loading from "./Loading";
import ClickedVideo from "./ClickedVideo";
import { VideoCommentsType ,VideoSuggestedType, VideoDetailsType } from "../types/types";

const VideoInformation = () => {
  const [videoDetails, setVideoDetails] = useState<VideoDetailsType>();
  const [videoComments, setVideoComments] = useState<VideoCommentsType>();
  const [suggestedVideos, setSuggestedVideos] = useState<VideoSuggestedType>();
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
  const { items } = videoDetails;
  const [firstItem] = items;
  const { statistics, snippet } = firstItem;

  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full ">
        <ClickedVideo videoId={videoId} statistics={statistics} snippet={snippet} />
        {videoComments.items.map((comment: CommentItem) => {
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
        {suggestedVideos.items.map((item) => {
          const { id, snippet } = item;
          const {videoId} = id
          return <VideoCard key={videoId} id={id} snippet={snippet} />;
        })}
      </aside>
    </div>
  );
};

export default VideoInformation;
