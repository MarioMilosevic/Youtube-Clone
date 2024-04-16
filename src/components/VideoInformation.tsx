import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { VideoDetailsItems } from "../types/types";
// import ReactPlayer from "react-player/youtube";
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
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const { videoId }: { videoId?: string } = useParams();
  console.log(videoId);



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
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [videoId]);

  if (!videoDetails || !videoComments || !suggestedVideos) {
    return <Loading />;
  }
  const { items: videoDetailsItems = [] }: { items: VideoDetailsItems[] } =
    videoDetails || {};
  const [{ snippet, statistics }] = videoDetailsItems;

  const { items: videoCommentItems } = videoComments;
  const { items: suggestedVideoItems } = suggestedVideos;
  const videoCardId = { videoId: videoId };
  console.log(videoDetails)
  console.log(videoComments)
  console.log(suggestedVideos)
  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full pb-8">
        <VideoCard snippet={snippet} id={videoCardId} statistics={statistics} />
        {videoCommentItems.map((comment) => {
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
          console.log(snippet)
          return (
            <VideoCard
              key={id.videoId}
              id={id}
              snippet={snippet}
              statistics={{likeCount:"", viewCount:""}}
            />
          );
        })}
      </aside>
    </div>
  );
};

export default VideoInformation;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       if (videoId) {
//         const response = await fetchVideoDetails(videoId);
//         setVideoDetails(response);
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };
//   fetchData();
// }, [videoId]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       if (videoId) {
//         const response = await fetchVideoComments(videoId);
//         setVideoComments(response);
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };
//   fetchData();
// }, [videoId]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       if (videoId) {
//         const response = await fetchSuggestedVideos(videoId);
//         setSuggestedVideos(response);
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };
//   fetchData();
// }, [videoId]);
