import { useEffect, useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Categories from "./components/Categories";
import Content from "./components/Content";
import { fetchFromAPI } from "./utils/fetch";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("New");

 useEffect(() => {
   (async () => {
     const data = await (async () => {
       // Your fetchFromAPI function here
       // Assuming fetchFromAPI is an async function
       return fetchFromAPI("mrbeast");
     })();
     console.log(data);
   })();
 }, []);


  const updateSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Categories updateSelectedCategory={updateSelectedCategory} />
        <Content selectedCategory={selectedCategory} />
      </Wrapper>
    </>
  );
}

export default App;
