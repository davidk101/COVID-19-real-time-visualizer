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

export const fetchDailyData = async () =>{
    try{
        const {data} = await axios.get(`${URL}/daily`) // destructuring 'data'

        const modifiedData = data.map(dailyData => ({ // mapping through the array and returning an object
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))

        return modifiedData
    }catch(error){

    }
}