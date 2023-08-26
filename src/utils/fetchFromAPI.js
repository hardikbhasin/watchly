import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
    
    url: BASE_URL,
    params: {
        maxResults: '50',
        order: 'date'
    },
    headers: {
        'X-RapidAPI-Key': 'd8de15af0fmshd0fc820092f57adp181ecejsn28f8c61cf742',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
export const fetchFromAPI = async (url) => {
   const {data} = await axios.get(`${BASE_URL}/${url}`, options);
   return data;

}