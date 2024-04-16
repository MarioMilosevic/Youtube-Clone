import { fetchChannelDetails, fetchChannelVideos } from "../utils/fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import VideoCard from "./VideoCard";
import Loading from "./Loading";
import ChannelInformation from "./ChannelInformation";

const Channel = () => {
  const [channelDetails, setChannelDetails] = useState();
  const [channelVideos, setChannelVideos] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { channelId }: { channelId?: string } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (channelId) {
          setIsLoading(true);
          const [detailsResponse, videosResponse] = await Promise.all([
            fetchChannelDetails(channelId),
            fetchChannelVideos(channelId),
          ]);

          const {
            items: [firstObject],
          } = detailsResponse;

          const { items } = videosResponse;

          setChannelDetails(firstObject);
          setChannelVideos(items);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [channelId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ChannelInformation channelDetails={channelDetails} />
          <main className="grid grid-cols-4 w-[1300px] mx-auto gap-4 pt-4">
            {channelVideos?.map((video) => {
              const { id, snippet } = video;
              console.log(id, snippet);
              return (
                <VideoCard
                  key={id.videoId}
                  id={id}
                  snippet={snippet}
                  statistics={{likeCount:"", viewCount:""}}
                />
              );
            })}
          </main>
        </>
      )}
    </>
  );
};

export default Channel;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       if (channelId) {
//         const response = await fetchChannelDetails(channelId);
//         const {
//           items: [firstObject],
//         } = response;
//         setChannelDetails(firstObject);
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   fetchData();
// }, [channelId]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       if (channelId) {
//         const response = await fetchChannelVideos(channelId);
//         const { items } = response;
//         console.log("ovo je response", items);
//         setChannelVideos(items);
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   fetchData();
// }, [channelId]);
