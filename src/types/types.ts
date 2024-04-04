export type ResponseType = {
  id: string;
  kind: string;
  snippet: {
    channeldId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishedTime: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
      };
      high: {
        url: string;
      };
      medium: {
        url: string;
      };
    };
    title: string;
  };
};
