import React, {useState, useEffect } from 'react'
import { NativeSelect, FormControl } from "@material-ui/core" // https://material-ui.com/components/selects/
import styles from './Country.module.css'
import { fetchCountries } from '../../api'

const Country = ({handleCountryChange}) => { // makes use of prop

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => { // useEffect takes in a call-back
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries()) // DEBUG:  fetchCountries() -  NOT just 'fetchCountries' - setFetchedCountries is expecting an array not an object
        }
        fetchAPI()
    }, [setFetchedCountries]) // second param is necessary - changes only when setFetchedCountries changes thereby enabling to pick different countries
    return (
        <FormControl className = {styles.formControl} variant = "standard">
            <NativeSelect placeholder = "sel" defaultValue = "" onChange = {(e) => handleCountryChange(e.target.value)}> {/* callback function with an event and then calling function from props  */}
                <option value = ""> Worldwide</option> {/* empty string will mean country = '' in Chart.js*/}
                <option value = "United States"> United States</option>
                {fetchedCountries.map((country, i) => <option key = {i} value = {country}>{country}</option>)} {/* adding 181 countries by mapping */}
            </NativeSelect>
        </FormControl>
    )
}

export default Country