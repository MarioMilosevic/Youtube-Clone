import slika from "../assets/probno.jpg"
type ChannelInformationTypes = {
  channelDetails: {
    description: string;
    title: string;
}
}

const ChannelInformation = ({ channelDetails }) => {
  console.log("ovo je proslijedjeno",channelDetails)
  // const {
  //   description,
  //   title,
   
  // } = channelDetails;

  return (
    <header className="flex flex-col items-center w-[1300px] mx-auto">
      <div className="w-56 h-56 rounded-full">
        <img className="rounded-full" src={slika} alt="Neki text" />
      </div>
      <h2 className="pt-4 text-3xl">Neki naslov</h2>
      <div className="py-4">
      Neki opis
      </div>
    </header>
  );
};

export default ChannelInformation;
