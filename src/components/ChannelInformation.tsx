type ChannelInformationTypes = {
  channelDetails?: {
    brandingSettings: {
      image: {
        bannerExternalUrl: string;
      };
    };
    snippet: {
      description: string;
      title: string;
    };
  };
};

const ChannelInformation = ({ channelDetails }: ChannelInformationTypes) => {
  if (!channelDetails) {
    return;
  }
  const {
    brandingSettings: {
      image: { bannerExternalUrl },
    },
    snippet: { description, title },
  } = channelDetails;

  return (
    <header className="flex flex-col items-center w-[1300px] mx-auto">
      <div className="w-56 h-56 rounded-full">
        <img
          className="w-full h-full rounded-full object-cover"
          src={bannerExternalUrl}
          alt={title}
        />
      </div>
      <h2 className="pt-4 text-3xl">{title}</h2>
      <div className="py-4">{description}</div>
    </header>
  );
};

export default ChannelInformation;
