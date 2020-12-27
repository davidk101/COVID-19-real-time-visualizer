import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from "@material-ui/core"
import styles from './country.module.css'
import {fetchCountries} from '../../api'

const country = ({handleCountryChange}) => { // makes use of prop

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => { // useEffect takes in a call-back
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries)
        }
        fetchAPI()
    }, [setFetchedCountries]) // second param is necessary - changes only when setFetchedCountries changes thereby enabling to pick different countries
    return (
        <FormControl className = {styles.formControl}>
            <NativeSelect defaultValue = "" onChange = {(e) => handleCountryChange(e.target.value)}> {/* callback function with an event and then calling function from props  */}
                <option value = "global"> Global</option>
                {fetchedCountries.map((country, i) => <option key = {i} value = {country}>{country}</option>)} {/* adding 181 countries by mapping */}
            </NativeSelect>
        </FormControl>
    )
}

export default country