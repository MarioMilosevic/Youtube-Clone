const baseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "853339e32dmsh484669df916fa96p1fa47cjsn9dbd231055af",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url:string) => {
  const fetchUrl = `${baseUrl}/${url}`;
  
  try {
    const response = await fetch(fetchUrl, options);
    const responseData = await response.json();
    console.log(responseData);
    return responseData; // Return the fetched data
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for handling in the calling code
  }

  
};
