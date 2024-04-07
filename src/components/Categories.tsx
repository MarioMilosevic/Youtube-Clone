import { IonIcon } from "@ionic/react";
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
import { useState } from "react";

type CategoriesType = {
  updateSelectedCategory: (category: string) => void;
  updateUrl: (input: string) => void;
};

const Categories = ({ updateSelectedCategory, updateUrl }: CategoriesType) => {
  const [icons,setIcons] = useState([
    {
      id: crypto.randomUUID(),
      isActive: true,
      icon: homeOutline,
      name: "Home",
      value:"New"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: flameOutline,
      name: "Trending",
      value: "Trending",
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: codeSlashOutline,
      name: "Coding",
      value: "Coding",
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: logoJavascript,
      name: "JavaScript",
      value: "JavaScript",
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: logoReact,
      name: "ReactJS",
      value: "ReactJS",
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: musicalNotesOutline,
      name: "Music",
      value:"Music"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: schoolOutline,
      name: "Education",
      value:"Education"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: discOutline,
      name: "Podcast",
      value:"Podcast"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: filmOutline,
      name: "Movie",
      value:"Movie"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: gameControllerOutline,
      name: "Gaming",
      value:"Gaming"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: pulseOutline,
      name: "Live",
      value:"Live"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: footballOutline,
      name: "Sport",
      value:"Sport"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: sparklesOutline,
      name: "Fashion",
      value:"Fashion"
    },
    {
      id: crypto.randomUUID(),
      isActive: false,
      icon: diamondOutline,
      name: "Beauty",
      value:"Beauty"
    },
  ]);

  const isActive = "bg-[#ff0000] custom-white rounded-full ";
  const baseClass =
    "flex items-center gap-3 custom-color  text-base hover:bg-[#ff0000] hover:text-white hover:rounded-full px-2";

  const clickHandler = (id: string, name:string) => {
    const updatedIcons = icons.map(icon => icon.id === id ? { ...icon, isActive: true } : { ...icon, isActive: false })
    setIcons(updatedIcons)
    updateSelectedCategory(name)
    updateUrl(name)
    }
  
  
  return (
    <aside className="pt-16 px-2 flex flex-col gap-6 w-[200px]">
      {icons.map((icon, index) => (
        <button
          key={index}
          onClick={() => clickHandler(icon.id, icon.name)}
          className={`${baseClass} ${icon.isActive ? isActive : ""}`}
        >
          <IonIcon icon={icon.icon} size="large"></IonIcon>
          <p className="text-white">{icon.name}</p>
        </button>
      ))}
    </aside>
  );
};

export default Categories;
