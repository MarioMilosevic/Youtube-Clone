export type VideoSearchType = {
  kind: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    kind: string;
    id: {
      kind: string;
      videoId: string;
    };
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
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
      channelTitle: string;
      liveBroadcastContent: string;
      publishedTime: string;
    };
  }[];
}[];

export type VideoDetailsType = {
  kind: string;
  items: {
    kind: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
        standard: {
          url: string;
          width: number;
          height: number;
        };
        maxres: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      tags: string[];
      categoryId: string;
      liveBroadcastContent: string;
      localized: {
        title: string;
        description: string;
      };
    };
    contentDetails: {
      duration: string;
      dimension: string;
      definition: string;
      caption: string;
      licensedContent: true;
      regionRestriction: {
        blocked: string[];
      };
      contentRating: Record<string, never>;
      projection: string;
    };
    statistics: {
      viewCount: string;
      likeCount: string;
      favoriteCount: string;
      commentCount: string;
    };
  };
};

export type VideoCommentsType = {
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    kind: string;
    id: string;
    snippet: {
      channelId: string;
      videoId: string;
      topLevelComment: {
        kind: string;
        id: string;
        snippet: {
          channelId: string;
          videoId: string;
          textDisplay: string;
          textOriginal: string;
          authorDisplayName: string;
          authorProfileImageUrl: string;
          authorChannelUrl: string;
          authorChannelId: {
            value: string;
          };
          canRate: boolean;
          viewerRating: string;
          likeCount: number;
          publishedAt: string;
          updatedAt: string;
        };
        canReply: true;
        totalReplyCount: number;
        isPublic: boolean;
      };
      canReply: boolean;
      totalReplyCount: number;
      isPublic: boolean;
    };
  }[];
};

export type VideoSuggestedType = {
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    kind: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
        standard: {
          url: string;
          width: number;
          height: number;
        };
        maxres: {
          url: string;
          width: number;
          height: number;
        };
      };
      channelTitle: string;
      liveBroadcastContent: string;
      publishTime: string;
    };
  }[];
};
