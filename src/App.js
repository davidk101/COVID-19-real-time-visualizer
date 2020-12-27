import React from 'react'
import {cards, chart, country} from './components' // only available through export from index.js
import styles from './App.module.css'
import {fetchData} from "./api"; // searches index.js by default unless otherwise specified
// braces necessary for named functions

class App extends React.Component{ /* App.js is the only class-based component file in our project - the rest make use of functional-based components i.e. hooks */

    state = {
        data: {},
        country: '' // this value is needed in App as it is the parent of Cards and Chart
    }
    async componentDidMount(){

        const fetchedData = await fetchData() // PARAM country = undefined i.e. calls original URL  in index.js within API
        this.setState({data: fetchedData})
    }

    handleCountryChange = async (country) => {
        // fetching data dynamically i.e. per user click of country selector
        const fetchedData = await fetchData(country)

        // setting state
        this.setState({data: fetchedData, country: country})
    }

    render(){

        const {data} = this.state // destructuring 'data'

        return(
        <div className = {styles.container}>
            <cards data = {data}/> {/* passing data as prop to 'cards' component*/}
            <country handleCountryChange = {this.handleCountryChange}/> {/* passing method as prop to 'cards' component*/}
            <chart />
        </div>
        )
    }
}

export default App