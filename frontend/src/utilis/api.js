import axios from 'axios';

const BASE_URL = 'https://internship-service.onrender.com/videos';

export const fetchDataFromApi = async (url) => {
  console.log(url);

  try {
    const { data } = await axios.get(`${BASE_URL}?page=${url}`);
    // console.log(data);
    return data.data;
  } catch (error) {
    console.error(error);
    // Handle network error
    return { error: 'No internet connection' };
  }
};
