import React from 'react'
import { Cards, Chart, Country, Footer } from './components' // only available through export from index.js
import styles from './App.module.css'
import { fetchData } from "./api" // searches index.js by default unless otherwise specified
// braces necessary for named functions
import banner from './images/banner.png'

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

        const {data, country} = this.state // destructuring data and country from the state

        return(
        <div className = {styles.container}>
            <div className = {styles.banner}>
                <img className = {styles.image} src = {banner} alt = "COVID-19 Voice Assistant and Real Time Visualizer" />
            </div>

            <Cards data = {data}  /> {/* passing data as prop to 'Cards' component*/}
            <Country  handleCountryChange = {this.handleCountryChange} /> {/* passing method as prop to 'Country' component*/}
            <Chart  data = {data} country = {country} /> {/* passing data and country as prop to 'Chart' component*/}
        <Footer />
        </div>
        )
    }
}

export default App;