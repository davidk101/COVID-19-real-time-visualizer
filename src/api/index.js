import axios from 'axios' // makes API requests

const URL = ''

export const fetchData = async () => {
    try{
        const {data:{confirmed, recovered, deaths, lastUpdate}} = await axios.get(URL) // destructuring data to retrieve only the data keys needed

        const modifiedData = {
            confirmed, // for identical key and values, values can be omitted
            recovered,
            deaths,
            lastUpdate
        }

        return modifiedData

    }catch(error){

    }
}