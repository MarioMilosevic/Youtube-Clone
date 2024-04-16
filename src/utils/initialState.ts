import {
  homeOutline,
  flameOutline,
  codeSlashOutline,
  logoJavascript,
  logoReact,
  musicalNotesOutline,
  schoolOutline,
  discOutline,
  filmOutline,
  gameControllerOutline,
  pulseOutline,
  footballOutline,
  sparklesOutline,
  diamondOutline,
} from "ionicons/icons";

export const responseInitialState = {
  id: "",
  kind: "",
  snippet: {
    channeldId: "",
    channelTitle: "",
    description: "",
    liveBroadcastContent: "",
    publishedTime: "",
    publishedAt: "",
    thumbnails: {
      default: {
        url: "",
      },
      high: {
        url: "",
      },
      medium: {
        url: "",
      },
    },
    title: "",
  },
};

export const initialCategoriesState = [
  {
    id: crypto.randomUUID(),
    isActive: true,
    icon: homeOutline,
    name: "Home",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: flameOutline,
    name: "Trending",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: codeSlashOutline,
    name: "Coding",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: logoJavascript,
    name: "JavaScript",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: logoReact,
    name: "ReactJS",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: musicalNotesOutline,
    name: "Music",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: schoolOutline,
    name: "Education",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: discOutline,
    name: "Podcast",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: filmOutline,
    name: "Movie",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: gameControllerOutline,
    name: "Gaming",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: pulseOutline,
    name: "Live",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: footballOutline,
    name: "Sport",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: sparklesOutline,
    name: "Fashion",
  },
  {
    id: crypto.randomUUID(),
    isActive: false,
    icon: diamondOutline,
    name: "Beauty",
  },
];

export type InitialCategoriesType = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  isActive: boolean;
  icon: string;
  name: string;
}