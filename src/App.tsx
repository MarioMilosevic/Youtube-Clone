import { useEffect } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Categories from "./components/Categories";
import Content from "./components/Content";
function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url =
  //       "https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
  //         "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       const mario = result.split('{"kind"');
  //       console.log(mario);
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <Categories />
        <Content/>
      </Wrapper>
    </>
  );
}

export default App;
