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

const Categories = () => {
  const icons = [
    { icon: homeOutline, name: "Home" },
    { icon: flameOutline, name: "Trending" },
    { icon: codeSlashOutline, name: "Coding" },
    { icon: logoJavascript, name: "JavaScript" },
    { icon: logoReact, name: "ReactJS" },
    { icon: musicalNotesOutline, name: "Music" },
    { icon: schoolOutline, name: "Education" },
    { icon: discOutline, name: "Podcast" },
    { icon: filmOutline, name: "Movie" },
    { icon: gameControllerOutline, name: "Gaming" },
    { icon: pulseOutline, name: "Live" },
    { icon: footballOutline, name: "Sport" },
    { icon: sparklesOutline, name: "Fashion" },
    { icon: diamondOutline, name: "Beauty" },
  ];

  return (
    <aside className="pt-12 px-2 flex flex-col justify-center gap-4 border w-[10%]">
      {icons.map((icon, index) => (
        <button
          key={index}
          className="flex items-center gap-4 custom hover:bg-[#ff0000] hover:text-white hover:rounded-full px-2"
        >
          <IonIcon icon={icon.icon} size="large"></IonIcon>
          <p className="text-white">{icon.name}</p>
        </button>
      ))}
    </aside>
  );
};

export default Categories;
