import slika from "../assets/probno.jpg";

const VideoCard = () => {
  return (
    <div className="flex flex-col justify-between h-[300px]">
      <div className="h-[200px] ">
        <img src={slika} alt="Some img alt" className="w-full h-full" />
      </div>
      <div className="bg-stone-900 h-[100px] flex flex-col gap-1 p-2">
        <h2>Tye Tribbett - New (Lyric Video)</h2>
        <h3 className="text-stone-400">TyeTribbetVEVO</h3>
        <h4>2 years ago</h4>
      </div>
    </div>
  );
};

export default VideoCard;
