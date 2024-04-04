import axios from "axios";

export const fetchFromAPI = async (searchValue: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: searchValue,
      part: "snippet,id",
      maxResults: "24",
      regionCode: "US",
    },
    headers: {
      "X-RapidAPI-Key": "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
