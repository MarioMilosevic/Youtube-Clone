import { ResponseType } from "axios";

type VideoInformationTypes = {
  responseData: ResponseType[];
  selectedVideo:null
};

const VideoInformation = ({ responseData, selectedVideo }: VideoInformationTypes) => {
  console.log(responseData);
  return (
    <div className="border w-[1300px] mx-auto flex justify-between">
      <main className="bg-red-500 w-[75%] ">mario</main>
      <aside className="w-[20%] bg-blue-500">Mario</aside>
    </div>
  );
};

export default VideoInformation;
