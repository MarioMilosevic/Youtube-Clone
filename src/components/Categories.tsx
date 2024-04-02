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
};

const Categories = ({ updateSelectedCategory }: CategoriesType) => {
  const [icons,setIcons] = useState([
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
  ]);

  const isActive = "bg-[#ff0000] custom-white rounded-full ";
  const baseClass =
    "flex items-center gap-3 custom-color  text-base hover:bg-[#ff0000] hover:text-white hover:rounded-full px-2";

  const clickHandler = (id: string, name:string) => {
    const updatedIcons = icons.map(icon => icon.id === id ? { ...icon, isActive: true } : { ...icon, isActive: false })
    setIcons(updatedIcons)
    updateSelectedCategory(name)
    }
  
  
  return (
    <aside className="pt-16 px-2 flex flex-col gap-6 w-[15%]">
      {icons.map((icon, index) => (
        <button
          key={index}
          onClick={() => clickHandler(icon.id, icon.name)}
          // onClick={() => clickHandler(icon.id)}
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
