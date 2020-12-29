import axios from 'axios' // makes API requests

const URL = 'https://covid19.mathdro.id/api'
const URL_US = 'https://api.covidtracking.com/v1/us/daily.json'

export const fetchData = async (country) => {

    let changeableURL = URL

    if(country){ // if country is an empty string - regular API URL is called i.e. for 'global' data
        changeableURL = `${URL}/countries/${country}`
    }
    try{
        const {data:{confirmed, recovered, deaths, lastUpdate, reportDate}} = await axios.get(changeableURL) // destructuring data to retrieve only the data keys needed

        const modifiedData = {
            confirmed, // for identical key and values, values can be omitted
            recovered,
            deaths,
            lastUpdate,
            reportDate
        }

        return modifiedData

    }catch(error){
        return error
    }
}

export const fetchDailyData = async () =>{
    try{
        const {data} = await axios.get(`${URL}/daily`) // destructuring 'data'

        const modifiedData = data.map(dailyData => ({ // mapping through the array and returning an object
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered: dailyData.recovered.total,
            date: dailyData.reportDate
        }))

        return modifiedData
    }catch(error){
        return error
    }
}

export const fetchDailyDataUS  = async () =>{
    try{
        const {data} = await axios.get(URL_US) // destructuring 'data'

        const modifiedData = data.map(({positive, recovered, death, dateChecked: date }) => ({  // mapping through the array and returning an object
            confirmed: positive,
            recovered,
            deaths: death,
            date
        }))

        return modifiedData

    }catch(error){
        return error
    }
}


export const fetchCountries = async () => {

    try{
        const {data : {countries}} = await axios.get(`${URL}/countries`) // destructuring data from response and destructuring countries from data
        return countries.map((country) => country.name) // ensuring only name is returned - ignoring iso2 and iso3 country info
    }catch(error){
        return error
    }
}