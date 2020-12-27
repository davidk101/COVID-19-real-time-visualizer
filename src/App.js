import React from 'react'
import {cards, chart, country} from './components' // only available through export from index.js
import styles from './App.module.css'
import {fetchData} from "./api"; // searches index.js by default unless otherwise specified
// braces necessary for named functions

class App extends React.Component{ /* App.js is the only class-based component file in our project - the rest make use of functional-based components i.e. hooks */

    state = {
        data: {},

    }
    async componentDidMount(){

        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }

    render(){

        const {data} = this.state // destructuring 'data'

        return(
        <div className = {styles.container}>
            <cards data = {data}/> {/* passing data as props to 'cards' component*/}
            <country />
            <chart />
        </div>
        )
    }
}

export default App