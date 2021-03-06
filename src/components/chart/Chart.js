import React, {useState, useEffect} from 'react'
import { fetchDailyData, fetchDailyDataUS } from "../../api";
import { Line, Bar } from 'react-chartjs-2' // react wrapper for Chart.js
import styles from './Chart.module.css'

const Chart = ({data: { confirmed, deaths, recovered}, country}) => { // destructuring data and country and then another destructuring takes place

    const [dailyData, setDailyData] = useState([]) // once data is fetched, it is set to the state using hooks

    useEffect(() => {
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData()
            setDailyData(dailyData)
        }

        fetchAPI()
    }, []) // second param is necessary - behaves like componentDidMount() - avoids going endlessly

    const [dailyDataUS, setDailyDataUS] = useState([]) // once data is fetched, it is set to the state using hooks

    useEffect(() => {
        const fetchAPIUS = async () => {
            const dailyDataUS = await fetchDailyDataUS()
            setDailyDataUS(dailyDataUS)
        }

        fetchAPIUS()
    }, []) // second param is necessary - behaves like componentDidMount() - avoids going endlessly

    // returns an array with 71 objects from dailyData API call
    const lineChartGlobal = (

        dailyData[0] ? ( // ensuring there's some defined data
            <Line
                data={{ // two braces for dynamic object
                    labels: dailyData.map(({date}) => date), // returns an array -  displaying dates from dailyData and displaying them as labels after destructuring the date
                    datasets: [{
                        data: dailyData.map(({confirmed}) => confirmed), // note: dailyData is not a function but rather an array and hence we map
                        label: 'Total cases',
                        borderColor: 'rgb(108, 92, 231)',
                        fill: true
                    }, {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'rgb(225, 112, 85)',
                        fill: true
                    }/*, {
                        data: dailyData.map(({recovered}) => recovered),
                        label: 'Recovered',
                        borderColor: 'rgb(0, 184, 148)',
                        fill: true
                    }*/]
                }}
                options={{
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true
                            },
                            position: 'right'
                        }]
                    }
                }
                }
            />) : null
    )
    /* class-based equivalent
        state = {
            dailyData: {}
        }
    */

    const lineChartUS = (

        dailyDataUS[0] ? ( // ensuring there's some defined data
            <Line
                data={{ // two braces for dynamic object
                    labels: dailyDataUS.map(({ date }) => new Date(date).toLocaleDateString()), // returns an array -  displaying dates from dailyData and displaying them as labels after destructuring the date
                    datasets: [{
                        data: dailyDataUS.map(({confirmed}) => confirmed), // note: dailyDataUS is not a function but rather an array and hence we map
                        label: 'Total cases',
                        borderColor: 'rgb(108, 92, 231)',
                        fill: true
                    }, {
                        data: dailyDataUS.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'rgb(225, 112, 85)',
                        fill: true
                    }, {
                        data: dailyDataUS.map(({recovered}) => recovered),
                        label: 'Recovered',
                        borderColor: 'rgb(0, 184, 148)',
                        fill: true
                    }]
                }}
                options={{
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true
                            },
                            position: 'left'
                        }]
                    }
                }
                }
            />) : null
    )

    const barChart = (
        confirmed ? (
            <Bar data={{
                labels: ['Total cases', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(108, 92, 231,0.5)', 'rgba(0, 184, 148,0.5)', 'rgba(225, 112, 85,0.5)'],
                    data: [confirmed.value, recovered.value, deaths.value]
                }
                ],
            }}
                 options={{legend: {display: false}, title: {display: true, text: `Current state in ${country}`}}}>

            </Bar>
        ) : null
    )


    return (
        <div className={styles.container}>
            {/*{lineChart}*/}
            {country === '' ? lineChartGlobal : null}
            {country === 'United States' ? lineChartUS : null }
            {country !== '' && country !== 'United States' ? barChart : null}

        </div>
    )
}

export default Chart;