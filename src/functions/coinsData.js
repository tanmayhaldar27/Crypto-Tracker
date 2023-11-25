import axios from "axios";


export const coinsData = (id) => {
    const myData = axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then(response=>{
        return response.data;
    })
    .catch(error =>{
      console.error(error)
    });
    return myData; 
}
// convertObject(setCoinData , response.data)