import { useEffect, useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Categories from "./components/Categories";
import Content from "./components/Content";
import { fetchFromAPI } from "./utils/fetch";
function App() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  useEffect(() => {
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
},[selectedCategory])
  
  const updateSelectedCategory = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Categories updateSelectedCategory={ updateSelectedCategory} />
        <Content selectedCategory={selectedCategory } />
      </Wrapper>
    </>
  );
}

export default App;
