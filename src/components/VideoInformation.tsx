import { ResponseType } from "axios";

type VideoInformationTypes = {
  responseData: ResponseType[];
  selectedVideo: ResponseType;
};

const VideoInformation = ({
  responseData,
  selectedVideo,
}: VideoInformationTypes) => {
  console.log(responseData);
  console.log(selectedVideo);
  const {
    snippet: {
      title,
      thumbnails: { high },
    },
  } = selectedVideo;
  console.log(high.url)
  return (
    <div className="w-[1300px] mx-auto flex gap-4">
      <main className="w-full ">
        <div className="border">
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
