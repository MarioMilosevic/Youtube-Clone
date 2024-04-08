import React, { useEffect, useState } from "react";
import { ResponseType } from "axios";
import ReactPlayer from "react-player/youtube";
import { fetchVideoComments, fetchVideoDetails } from "../utils/fetch";

type VideoInformationTypes = {
  responseData: ResponseType[];
  selectedVideo: ResponseType;
};

const VideoInformation = ({
  responseData,
  selectedVideo,
}: VideoInformationTypes) => {
  const [mario, setMario] = useState()

  console.log(responseData);
  console.log(selectedVideo);
  const {
    id: { videoId},snippet: {
      title,
      thumbnails: { high },
    },
  } = selectedVideo;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {items} = await fetchVideoDetails(videoId)
        // setMario(response)
        console.log("mario",mario)
      } catch (error) {
        console.error("Error fetching data", error)
      }
    }
    fetchData()
  }, [])
// iskoristit VideoCard sa glavni video i ostale sve videee a za kanal napravit posebnu komponentu
  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full ">
        <div className="border">
          {/* <ReactPlayer url={high.url}/> */}
          <img
            src={high.url}
            alt="youtube picture"
            className="w-full h-[700px]"
          />
        </div>
          <h2 dangerouslySetInnerHTML={{ __html: title }} className="text-lg py-1"></h2>
      </main>
      <aside className="w-[20%] bg-blue-500">Mario</aside>
    </div>
  );
};

export default VideoInformation;
