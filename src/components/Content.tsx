import VideoCard from "./VideoCard";

type ContentTypes = {
  selectedCategory: string;
};

const Content = ({ selectedCategory }: ContentTypes) => {
  return (
    <div className=" flex flex-col flex-1 pl-2">
      <p className="text-3xl font-semibold">
        {selectedCategory} <span className="text-[#ff0000]">videos</span>
      </p>
      <main className="pt-12 grid gap-4 grid-cols-4">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </main>
    </div>
  );
};

export default Content;
