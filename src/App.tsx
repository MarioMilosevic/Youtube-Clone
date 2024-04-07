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
  const [url, setUrl] = useState("New")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items } = await fetchFromAPI(url);
        setResponseData(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);

  const updateSelectedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const updateUrl = (input: string) => {
    setUrl(input)
  }

  return (
    <>
      <Header updateUrl={ updateUrl} />
      <Wrapper>
        <Categories updateSelectedCategory={updateSelectedCategory} updateUrl={updateUrl} />
        <Content
          selectedCategory={selectedCategory}
          responseData={responseData}
        />
      </Wrapper>
    </>
  );
}

export default App;
