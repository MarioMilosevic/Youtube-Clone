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
    { isActive: true, icon: homeOutline, name: "Home" },
    { isActive: false, icon: flameOutline, name: "Trending" },
    { isActive: false, icon: codeSlashOutline, name: "Coding" },
    { isActive: false, icon: logoJavascript, name: "JavaScript" },
    { isActive: false, icon: logoReact, name: "ReactJS" },
    { isActive: false, icon: musicalNotesOutline, name: "Music" },
    { isActive: false, icon: schoolOutline, name: "Education" },
    { isActive: false, icon: discOutline, name: "Podcast" },
    { isActive: false, icon: filmOutline, name: "Movie" },
    { isActive: false, icon: gameControllerOutline, name: "Gaming" },
    { isActive: false, icon: pulseOutline, name: "Live" },
    { isActive: false, icon: footballOutline, name: "Sport" },
    { isActive: false, icon: sparklesOutline, name: "Fashion" },
    { isActive: false, icon: diamondOutline, name: "Beauty" },
  ];

  const isActive = "bg-[#ff0000] custom-white rounded-full ";
  const baseClass =
    "flex items-center gap-3 custom-color text-base hover:bg-[#ff0000] hover:text-white hover:rounded-full px-2";

  return (
    <aside className="pt-16 px-2 flex flex-col justify-center gap-6 w-[10%]">
      {icons.map((icon, index) => (
        <button
          key={index}
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
