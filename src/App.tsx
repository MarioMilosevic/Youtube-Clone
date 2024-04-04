import { useEffect, useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Categories from "./components/Categories";
import Content from "./components/Content";
import { fetchFromAPI } from "./utils/fetch";
import { ResponseType } from "axios";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [responseData, setResponseData] = useState<ResponseType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items } = await fetchFromAPI("mrbeast");
        setResponseData(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const updateSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Categories updateSelectedCategory={updateSelectedCategory} />
        <Content
          selectedCategory={selectedCategory}
          responseData={responseData}
        />
      </Wrapper>
    </>
  );
}

export default App;
