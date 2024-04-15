import { fetchChannelDetails } from "../utils/fetch";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router";
import ChannelInformation from "./ChannelInformation";

const Channel = () => {
  const [channelDetails, setChannelDetails] = useState();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const { channelId }: { channelId?: string } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (channelId) {
          const response = await fetchChannelDetails(channelId);
          console.log("ovo je response ", response);
          const { items } = response;
          const [firstObject] = items;
          // const { snippet } = firstObject;
          // da proslijedim citav response, pa da tamo destrukutrujem
          // const {brandingSettings:{image:{bannerExternalUrl}} ,snippet} = firstObject
          setChannelDetails(firstObject);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [channelId]);

  // const { items } = channelDetails
  // const [firstObject] = items
  // const { id, snippet } = firstObject
  // console.log(id, snippet)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ChannelInformation channelDetails={channelDetails} />
      )}
    </>
  );
};

export default Channel;
