import { api } from "./api";

const getCharactersData = async() => {
    try {
      const response = await api.get('/character');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

export default getCharactersData;
