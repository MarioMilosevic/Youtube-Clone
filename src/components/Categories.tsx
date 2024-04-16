import { IonIcon } from "@ionic/react";
import { InitialCategoriesType } from "../utils/initialState";

type CategoriesType = {
  updateSelectedCategory: (category: string) => void;
  updateUrl: (input: string) => void;
  icons: InitialCategoriesType[];
  updateIcons: (icons: InitialCategoriesType[]) => void;
};

const Categories = ({
  updateIcons,
  icons,
  updateSelectedCategory,
  updateUrl,
}: CategoriesType) => {
  const isActive = "bg-[#ff0000] custom-white rounded-full ";
  const baseClass =
    "flex items-center gap-3 custom-color  text-base hover:bg-[#ff0000] hover:text-white hover:rounded-full px-2";

  const clickHandler = (id: string, name: string) => {
    if (name === "Home") {
      name = "New";
    }

    const updatedIcons = icons.map((icon) =>
      icon.id === id
        ? { ...icon, isActive: true }
        : { ...icon, isActive: false }
    );

    updateIcons(updatedIcons);
    updateSelectedCategory(name);
    updateUrl(name);
  };

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
