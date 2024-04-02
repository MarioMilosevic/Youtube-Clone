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
  

  return (
    <>
      <Header />
      <Wrapper>
        <Categories />
        <Content />
      </Wrapper>
    </>
  );
}

export default App;
