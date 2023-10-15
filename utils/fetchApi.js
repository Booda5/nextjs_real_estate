import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async(url) =>{
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '1ea851400dmsh0a3a886c0d8ff5bp1b882fjsnc03a6d3b7823',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        

    });
    return data
}